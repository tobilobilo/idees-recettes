import PageTitle from '../../components/ui/PageTitle';
import PageTitleDescription from '../../components/ui/PageTitleDescription';
import Link from '../../components/ui/Link';
import Button from '../../components/form/Button';
import addRecetteMealDB from '../../functions/addRecetteMealDB';
import { useSelector, useDispatch } from 'react-redux';
import { addData as addDataRecettemealdb, updateLocalStorage as updateLocalStorageDataRecettemealdb } from '../../redux/slices/recettemealdb';
import { displayAlert } from '../../redux/slices/alerts';

const Fiche = ({recette, category, area, refetch}) => {
    
    const dispatch = useDispatch();
    const dataRecetteAPIMealDB = useSelector( (state) => state.recettemealdb.value );

    function addRecette() {
        const recetteToAdd = {
            id: recette.id,
            img: recette.img,
            category: category,
            area: area,
            name: recette.name
        };
        const adding = addRecetteMealDB(recetteToAdd, dataRecetteAPIMealDB);
        if(adding.added) {
            const alertData = {
                message: `${recette.name} a été ajouté à vos recette`,
                status: "success"
            }
            dispatch(displayAlert({...alertData}));
            dispatch(addDataRecettemealdb(recetteToAdd));
            dispatch(updateLocalStorageDataRecettemealdb());
        } else {
            const alertData = {
                message: "La recette est déjà dans vos recette.",
                status: "error"
            }
            dispatch(displayAlert({...alertData}));
        }
    }

    return (
        <article className="m-auto py-2 px-2 sm:px-0">
            <PageTitle text={recette.name} />
            <PageTitleDescription text={`${category} - ${area}`} />
            <div className="md:grid md:grid-cols-3 mt-2 md:mt-8 md:gap-8">
                <div className="p-4 pb-10 bg-stone-800 self-start lg:p-8 lg:pb-16">
                    <img src={recette.img} alt={recette.name} className="border-4 border-lime-500" />
                </div>
                <div className="md:col-span-2">
                    <div className="mt-4 md:mt-0 flex flex-row gap-2 flex-wrap">
                        <Button onClick={ addRecette } text="Ajouter à mes recettes" type="" preIcon="plus" singleClick={true} refresh={refetch} />
                        { recette.youtube && <Link to={recette.youtube} text="Voir la recette en vidéo" targetblank={true} preIcon="video" /> }
                    </div>
                    <h3 className="text-stone-800 text-center text-sm font-bold mt-4 md:mt-8 md:text-lg md:text-left">Ingrédients</h3>
                    <ul className="text-stone-800 text-sm leading-tight whitespace-pre-wrap mt-1 md:mt-2 md:text-base">
                        { recette.ingredients.map( (ingredient, index) => (
                            <li key={`ingredientItem${index}`} className="flex flex-row gap-2 items-center py-0.5">
                                <input type="checkbox" id={`ingredient${index}`} name={`ingredient${index}`} />
                                <label className="" htmlFor={`ingredient${index}`}>{ingredient.quantity}{(ingredient.quantity && ingredient.name) ? ' - ' : ''}{ingredient.name}</label>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-stone-800 text-center text-sm font-bold mt-4 md:mt-8 md:text-lg md:text-left">Préparation</h3>
                    <pre style={{fontFamily: "inherit"}} className="text-stone-800 text-sm leading-tight whitespace-pre-wrap mt-1 md:mt-2 md:text-base">
                        {recette.instructions}
                    </pre>
                </div>
            </div>
        </article>
     );
}
 
export default Fiche;