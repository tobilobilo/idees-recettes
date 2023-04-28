import PageTitle from '../../components/ui/PageTitle';
import PageTitleDescription from '../../components/ui/PageTitleDescription';
import PageSubTitle from '../../components/ui/PageSubTitle';
import { useSelector } from 'react-redux';
import CardTheme from '../../components/ui/CardTheme';

const Glossary = () => {
    const dataAreas = useSelector( (state) => state.areas.value );
    const dataCategories = useSelector( (state) => state.categories.value );

    return ( 
        <>
            <PageTitle text="Glossaire" />
            <PageTitleDescription text="Plus de détails sur les catégories et les nationalités des recettes." />
            <PageSubTitle text="Catégories" />
            <div className="grid grid-cols-1 gap-x-2 gap-y-4 mt-2 sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:pt-4">
                { dataCategories.map( ({ id, nom, img, description }) => (
                    <CardTheme key={`category${id}`} nom={nom} img={img} description={description} />
                )) }
            </div>
            <PageSubTitle text="Nationalités" />
            <div className="grid grid-cols-1 gap-x-2 gap-y-4 mt-2 sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:pt-4">
                { dataAreas.map( ({ id, nom, img, description }) => (
                    <CardTheme key={`nationalite${id}`} nom={nom} img={img} description={description} type="nationalite" />
                )) }
            </div>
        </>
     );
}
 
export default Glossary;