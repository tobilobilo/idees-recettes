import Fiche from './Fiche';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { displayAlert } from '../../redux/slices/alerts';
import LoadingIcon from '../../components/ui/LoadingIcon';
import { useEffect } from 'react';

const Recette = ({url=null, refetch=0}) => {
    
    const params = useParams();
    let fetchUrl = url;
    if(!fetchUrl) {
        if(params.id) {
        fetchUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + params.id; // fetch url de Meals DB
        }
    }

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
        return ingredients;
    }

    useEffect( () => {
        setRecetteLoading(true);
        axios.get(fetchUrl)
        .then((response) => {
            setRecetteLoading(false);
            if(!response.data.meals) {
                displayMessage("Aucune recette trouvée");
                    return
                }
                const recetteFromApi = response.data.meals[0];
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
    }, [refetch]);
    
    return ( 
        <>
            {recetteLoading && <LoadingIcon /> }
            {recette && 
                <Fiche recette={recette} category={category} area={area} refetch={refetch} />
            }
        </>
     );
}
 
export default Recette;