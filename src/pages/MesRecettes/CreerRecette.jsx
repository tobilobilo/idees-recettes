import PageTitle from '../../components/ui/PageTitle';
import PageTitleDescription from '../../components/ui/PageTitleDescription';

const CreerRecette = ({id, fetchUrl, dataTypeArray}) => {
    

    return (
        <>
            <PageTitle text="Créer une recette" />
            <PageTitleDescription text="pour l'ajouter à votre album" />
            <p className="italic mt-4 md:mt-8">Fonctionalité encore en développement</p>
        </>
     );
}
 
export default CreerRecette;