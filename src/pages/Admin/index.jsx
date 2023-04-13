import PageTitle from '../../components/ui/PageTitle';
import PageTitleDescription from '../../components/ui/PageTitleDescription';
import Button from '../../components/form/Button';
import { useDispatch } from 'react-redux';
import { turnOn, updateLocalStorage as dataWarningUpdateLocalStorage } from '../../redux/slices/dataWarning';
import { displayAlert } from '../../redux/slices/alerts';

const Admin = () => {
    const dispatch = useDispatch();

    function deleteMealsAPI() {
        console.log('deleteMealsAPI')
    }
    function deleteMealsCustom() {
        console.log('deleteMealsCustom')
        const alertData = {
            message: "Les recettes que vous avez personnellement créé ont été supprimés",
            status: "error"
        }
        dispatch(displayAlert({...alertData}));
    }
    function deleteParams() {        
        dispatch(turnOn());
        dispatch(dataWarningUpdateLocalStorage());
        const alertData = {
            message: "Les données sur tous les paramètres de navigation ont été supprimés",
            status: "success"
        }
        dispatch(displayAlert({...alertData}));
    }
    function deleteAll() {
        console.log('deleteAll')
    }

    return ( 
        <>
            <PageTitle text="Admin" />
            <PageTitleDescription text="Options avancées" />
            <div className="pt-3 grid gap-4">
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
                    <Button onClick={ deleteMealsCustom } text="Supprimer" type="linkcard" singleClick={true} />
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