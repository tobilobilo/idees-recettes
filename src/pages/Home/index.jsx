import * as React from 'react';
import Logo from '../../components/ui/Logo';
import PageTitle from '../../components/ui/PageTitle';
import PageTitleDescription from '../../components/ui/PageTitleDescription';
import Button from '../../components/form/Button';
import Select from '../../components/form/Select';
import ResultsFiltered from './ResultsFiltered';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    console.log('home');
    const [whatToShowType, setWhatToShowType] = useState("");
    const dataAreas = useSelector( (state) => state.areas.value );
    const dataCategories = useSelector( (state) => state.categories.value );
    
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedArea, setSelectedArea] = useState("");
    
    const displayContent = (type, data) => {
        //console.log('displayContent', type, data)
        //setWhatToShowType(type);
        //setWhatToShowData(data);
    }
    function resetHomeFilterStates(cb, id, type) {
        setWhatToShowType(type);
        setSelectedCategory("");
        setSelectedArea("");
            cb(id);
            //cb2(type, data);
            console.log('iiiid');
    }
    function changeCategory(categoryId) {
        resetHomeFilterStates(setSelectedCategory, categoryId, "categories");
    }
    function changeArea(areaId) {
        resetHomeFilterStates(setSelectedArea, areaId, "nationalites");
    }
    
    return ( 
        <>
            <PageTitle text="Mes Idées Recettes" />
            <PageTitleDescription text="Le guide ultime pour trouver l'inspiration culinaire" />
            <Logo classNames="w-24 fill-lime-500 m-auto sm:w-28 md:w-32" />
           
            <div className="bg-stone-800 mt-4 overflow-hidden bg-home-bloc-xs bg-right bg-no-repeat 
            md:bg-home-bloc-md xl:bg-home-bloc-lg md:bg-cover">
                <div className="mt-24 mb-12 p-4 bg-white/80 relative
                 sm:mt-0 sm:mb-0 sm:w-1/2 md:max-w-md sm:py-12 sm:px-4
                 md:py-12 md:px-8">
                    <h3 className="text-start text-2xl text-stone-800 md:text-3xl">
                        Trouver l'inspiration
                    </h3>
                    <div className="mt-2 pt-2 md:mt-4 md:pt-4">
                        <Select hasBtn={false} onChange={changeCategory} label="Par catégories" unique="by-categories" options={dataCategories} placeholder="Catégorie" state={selectedCategory} active={ (whatToShowType === "categories") ? true : false } />
                    </div>
                    <div className="mt-3 pt-1 border-t border-stone-900/20 md:mt-5 md:pt-3">
                        <Select hasBtn={false} onChange={changeArea} label="Par nationalités" unique="by-areas" options={dataAreas} placeholder="Nationalités" state={selectedArea} active={ (whatToShowType === "nationalites") ? true : false } />
                    </div>
                    <div className="mt-2 pt-2 border-t border-stone-900/20 md:mt-4 md:pt-4">
                        <Button onClick={displayContent} text="Afficher une recette aléatoire" type="fullWidthMobile" />
                    </div>
                </div>
            </div>

            {(whatToShowType == "categories") && <ResultsFiltered title="Testinn: selectedCategory" id={selectedCategory} fetchUrl={`https://www.themealdb.com/api/json/v1/1/filter.php?c=`} dataTypeArray={dataCategories} /> }
            {(whatToShowType == "nationalites") && <ResultsFiltered title="Testinn: selectedArea" id={selectedArea} fetchUrl={`https://www.themealdb.com/api/json/v1/1/filter.php?a=`} dataTypeArray={dataAreas} /> }
        </>
     );
}
 
export default Home;