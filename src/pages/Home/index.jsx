import * as React from 'react';
import Logo from '../../components/ui/Logo';
import PageTitle from '../../components/ui/PageTitle';
import PageTitleDescription from '../../components/ui/PageTitleDescription';
import Button from '../../components/form/Button';
import Select from '../../components/form/Select';
import Results from '../../components/ui/Results';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    
    const [whatToShowType, setWhatToShowType] = useState("");
    const [whatToShowData, setWhatToShowData] = useState();
    const dataAreas = useSelector( (state) => state.areas.value );
    const dataCategories = useSelector( (state) => state.categories.value );
    
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedArea, setSelectedArea] = useState("");
    
    const displayContent = (type, data) => {
        console.log(type, data)
        setWhatToShowType(type);
        setWhatToShowData(data);
    }
    function resetHomeFilterStates() {
        setSelectedCategory("");
        setSelectedArea("");
    }
    function changeCategory(categoryId) {
        resetHomeFilterStates();
        setSelectedCategory(categoryId);
    }
    function changeArea(areaId) {
        resetHomeFilterStates();
        setSelectedArea(areaId);
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
                        <Select onClick={ () => displayContent("categories", selectedCategory) } onChange={changeCategory} label="Par catégories" unique="by-categories" options={dataCategories} placeholder="Catégorie" state={selectedCategory} />
                    </div>
                    <div className="mt-3 pt-1 border-t border-stone-900/20 md:mt-5 md:pt-3">
                        <Select onClick={ () => displayContent("nationalites", selectedArea) } onChange={changeArea} label="Par nationalités" unique="by-areas" options={dataAreas} placeholder="Nationalités" state={selectedArea} />
                    </div>
                    <div className="mt-2 pt-2 border-t border-stone-900/20 md:mt-4 md:pt-4">
                        <Button onClick={displayContent} text="Afficher une recette aléatoire" type="fullWidthMobile" />
                    </div>
                </div>
            </div>

            {(whatToShowType == "categories" && whatToShowData) && <Results title="Testinn: selectedCategory" id={whatToShowData} fetchUrl={`https://www.themealdb.com/api/json/v1/1/filter.php?c=`} dataarray={dataCategories} /> }
            {(whatToShowType == "nationalites" && whatToShowData) && <Results title="Testinn: selectedArea" id={whatToShowData} fetchUrl={`https://www.themealdb.com/api/json/v1/1/filter.php?a=`} dataarray={dataAreas} /> }
        </>
     );
}
 
export default Home;