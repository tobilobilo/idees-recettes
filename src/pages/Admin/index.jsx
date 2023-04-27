import PageTitle from '../../components/ui/PageTitle';
import PageTitleDescription from '../../components/ui/PageTitleDescription';
import Button from '../../components/form/Button';
import { useDispatch } from 'react-redux';
import { turnOn, updateLocalStorage as dataWarningUpdateLocalStorage } from '../../redux/slices/dataWarning';
import { displayAlert } from '../../redux/slices/alerts';
import { setData as setDataAreas, updateLocalStorage as updateLocalStorageDataAreas } from '../../redux/slices/areas';
import { setData as setDataCategories, updateLocalStorage as updateLocalStorageCategories } from '../../redux/slices/categories';
import { addData as addDataRecettemealdb, clearData as clearDataRecettemealdb, updateLocalStorage as updateLocalStorageDataRecettemealdb } from '../../redux/slices/recettemealdb';

const Admin = () => {
    const dispatch = useDispatch();

    function fetchCategoriesAndAreas(displayMessage=true) {
        dispatch(setDataAreas(null));
        dispatch(updateLocalStorageDataAreas());
        dispatch(setDataCategories(null));
        dispatch(updateLocalStorageCategories());
        if(displayMessage) {
            const alertData = {
                message: "Les catégories et les nationalités ont été réinitialisées.",
                status: "success"
            }
            dispatch(displayAlert({...alertData}));
        }
    }
    function deleteMealsAPI(displayMessage=true) {
        dispatch(clearDataRecettemealdb());
        dispatch(updateLocalStorageDataRecettemealdb());
        if(displayMessage) {
            const alertData = {
                message: "Les recettes de votre album ont été supprimées.",
                status: "success"
            }
            dispatch(displayAlert({...alertData}));
        }
    }
    function deleteMealsCustom(displayMessage=true) {
        console.log('deleteMealsCustom');
    }
    function deleteParams(displayMessage=true) {        
        dispatch(turnOn());
        dispatch(dataWarningUpdateLocalStorage());
        if(displayMessage) {
            const alertData = {
                message: "Les données sur tous les paramètres de navigation ont été supprimés.",
                status: "success"
            }
            dispatch(displayAlert({...alertData}));
        }
    }
    function deleteAll() {
        fetchCategoriesAndAreas(false);
        deleteMealsAPI(false);
        deleteMealsCustom(false);
        deleteParams(false);
        const alertData = {
            message: "Toutes les données ont été supprimés et réinitialisées.",
            status: "success"
        }
        dispatch(displayAlert({...alertData}));
    }

    return ( 
        <>
            <PageTitle text="Admin" />
            <PageTitleDescription text="Options avancées" />
            <div className="pt-3 grid gap-4">
                <div className="shadow-lg bg-white">
                    <div className="py-3 px-4">
                        <p className="w-full text-left text-stone-800 text-lg font-medium leading-tight uppercase">Réinitialiser les catégories et les nationalités</p>
                        <div className="flex flex-row justify-between text-stone-400 text-sm pt-2">Inclus seulement les catégories et les nationalités provenant de l'API</div>
                    </div>
                    <Button onClick={ fetchCategoriesAndAreas } text="Réinitialiser" type="linkcard" singleClick={true} />
                </div>
                <div className="shadow-lg bg-white">
                    <div className="py-3 px-4">
                        <p className="w-full text-left text-stone-800 text-lg font-medium leading-tight uppercase">Supprimer toutes les recettes que vous ajoutées</p>
                        <div className="flex flex-row justify-between text-stone-400 text-sm pt-2">Inclus seulement les recettes provenant de l'API</div>
                    </div>
                    <Button onClick={ deleteMealsAPI } text="Supprimer" type="linkcard" singleClick={true} />
                </div>
                <div className="shadow-lg bg-white">
                    <div className="py-3 px-4">
                        <p className="w-full text-left text-stone-800 text-lg font-medium leading-tight uppercase">Supprimer toutes les recettes que vous avez créées</p>
                        <div className="flex flex-row justify-between text-stone-400 text-sm pt-2">Inclus seulement les recettes que vous avez personnellement créé</div>
                    </div>
                    <Button onClick={ deleteMealsCustom } text="Supprimer" type="linkcard" singleClick={true} disabled={true} />
                </div>
                <div className="shadow-lg bg-white">
                    <div className="py-3 px-4">
                        <p className="w-full text-left text-stone-800 text-lg font-medium leading-tight uppercase">Supprimer tous les paramètres de navigation</p>
                        <div className="flex flex-row justify-between text-stone-400 text-sm pt-2">Inclus seulement le marqueur qui défini l'affichage du panneau de la provenance des données</div>
                    </div>
                    <Button onClick={ () => deleteParams() } text="Supprimer" type="linkcard" singleClick={true} />
                </div>
                <div className="shadow-lg bg-white">
                    <div className="py-3 px-4">
                        <p className="w-full text-left text-stone-800 text-lg font-medium leading-tight uppercase">Supprimer toutes les données locales</p>
                        <div className="flex flex-row justify-between text-stone-400 text-sm pt-2">Incluant toutes vos recettes et paramètres de navigation</div>
                    </div>
                    <Button onClick={ deleteAll } text="Supprimer" type="linkcard" singleClick={true} />
                </div>
            </div>
        </>
     );
}
 
export default Admin;