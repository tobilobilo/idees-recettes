import PageTitle from '../../components/ui/PageTitle';
import PageTitleDescription from '../../components/ui/PageTitleDescription';
import Link from '../../components/ui/Link';
import Button from '../../components/form/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { displayAlert } from '../../redux/slices/alerts';
import LoadingIcon from '../../components/ui/LoadingIcon'
import { useEffect } from 'react';

const Recette = () => {
    
    const params = useParams();
    const [recette, setRecette ] = useState();
    const [recetteLoading, setRecetteLoading ] = useState(true);
    const dispatch = useDispatch();
    const dataAreas = useSelector( (state) => state.areas.value );
    const dataCategories = useSelector( (state) => state.categories.value );
    const [category, setCategory] = useState();
    const [area, setArea] = useState();

    function displayMessage(message="Une erreur s'est produite", status="error") {
        const alertData = {
            message: message,
            status: status
        }
        dispatch(displayAlert({...alertData}));
    }

    useEffect( () => {
        if(params.id) {
            axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + params.id)
            .then((response) => {
                setRecetteLoading(false);
                if(!response.data.meals) {
                    displayMessage("Aucune recette trouvée");
                        return
                    }
                    const recetteFromApi = response.data.meals[0];
                    function getIngredients(recetteFromApi) {
                        const ingredients = [];
                        for( let i = 1; i<= 20; i++) {
                            const name = recetteFromApi[`strIngredient${i}`];
                            if(name) {
                                ingredients.push({ 
                                    name: name,
                                    quantity: recetteFromApi[`strMeasure${i}`]
                                })
                            }
                        }
                        return ingredients
                    }
                    setRecette( prevData => ({
                        ...prevData,
                        id: recetteFromApi.idMeal,
                        name: recetteFromApi.strMeal,
                        category: recetteFromApi.strCategory,
                        area: recetteFromApi.strArea,
                        instructions: recetteFromApi.strInstructions,
                        img: recetteFromApi.strMealThumb,
                        youtube: recetteFromApi.strYoutube,
                        ingredients: getIngredients(recetteFromApi)
                    }));
                    dataCategories.find(item => {
                        if(item.name === recetteFromApi.strCategory) setCategory(item.nom);
                    });
                    dataAreas.find(item => {
                        if(item.name === recetteFromApi.strArea) setArea(item.nom);
                    });
                })
                .catch((error) => {
                    setRecetteLoading(false);
                    displayMessage("Une erreur est survenue");
                });
        }
    }, [])
    
    return ( 
        <>
            {recetteLoading && <LoadingIcon /> }
            {recette && 
                <article className="m-auto py-2 px-2 sm:px-0">
                    <PageTitle text={recette.name} />
                    <PageTitleDescription text={`${category} - ${area}`} />
                    <img src={recette.img} alt={recette.name} className="mt-2 md:mt-4" />
                    <div className="mt-4 md:mt-8 flex flex-row gap-2 flex-wrap">
                        <Button onClick={ () => {} } text="Ajouter à mes recettes" type="" preIcon="plus" />
                        { recette.youtube && <Link to={recette.youtube} text="Voir la recette en vidéo" targetblank={true} preIcon="video" /> }
                    </div>
                    <h3 className="text-stone-800 text-center text-sm font-bold mt-4 md:mt-8 md:text-lg">Ingrédients</h3>
                    <ul className="text-stone-800 text-sm leading-tight whitespace-pre-wrap mt-1 md:mt-2 md:text-base">
                        { recette.ingredients.map( (ingredient, index) => (
                            <li key={`ingredientItem${index}`} className="flex flex-row gap-2 items-center py-0.5">
                                <input type="checkbox" id={`ingredient${index}`} name={`ingredient${index}`} />
                                <label className="" htmlFor={`ingredient${index}`}>{ingredient.quantity} - {ingredient.name}</label>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-stone-800 text-center text-sm font-bold mt-4 md:mt-8 md:text-lg">Préparation</h3>
                    <pre style={{fontFamily: "inherit"}} className="text-stone-800 text-sm leading-tight whitespace-pre-wrap mt-1 md:mt-2 md:text-base">
                        {recette.instructions}
                    </pre>
                </article>
            }
        </>
     );
}
 
export default Recette;