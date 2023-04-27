import PageTitle from '../../components/ui/PageTitle';
import PageDescription from '../../components/ui/PageDescription';
import PageTitleDescription  from '../../components/ui/PageTitleDescription';
import Link from '../../components/ui/Link';
import Button from '../../components/form/Button';
import Select from '../../components/form/Select';
import CardTheme from '../../components/ui/CardTheme';
import CardRecette from '../../components/ui/CardRecette';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const MesRecettes = () => {
    const [recettes, setRecettes] = useState(true);
    const [filters, setfilters] = useState(false);
    const [whatToShowType, setWhatToShowType] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedArea, setSelectedArea] = useState("");
    const dataAreas = useSelector( (state) => state.areas.value );
    const dataCategories = useSelector( (state) => state.categories.value );
    const dataRecettesMealDb = useSelector( (state) => state.recettemealdb.value );

    const [categoriesToFilter, setCategoriesToFilter] = useState([]);
    const [areasToFilter, setAreasToFilter] = useState([]);
    const [recetteToDisplay, setRecetteToDisplay] = useState(dataRecettesMealDb);

    const toggleFilters = () => {
        setfilters(!filters);
    }

    function resetFilterStates(cb, id, type) {
        setWhatToShowType(type);
        setSelectedCategory("");
        setSelectedArea("");
        cb(id);
    }
    function changeCategory(categoryId) {
        resetFilterStates(setSelectedCategory, categoryId, "categories");
    }
    function changeArea(areaId) {
        resetFilterStates(setSelectedArea, areaId, "nationalites");
    }

    function removeFilter(){
        setWhatToShowType("");
        setSelectedCategory("");
        setSelectedArea("");
    }

    useEffect( () => {
        if(dataRecettesMealDb.length > 0){
            const uniqueCategories = [];
            const uniqueAreas = [];
            dataRecettesMealDb.map( (recette) => {
                const categoryToAdd = dataCategories.find(category => category.nom === recette.category);
                if(!uniqueCategories.find(category => category.nom === categoryToAdd.nom)) uniqueCategories.push(categoryToAdd);
                const areaToAdd = dataAreas.find(area => area.nom === recette.area);
                if(!uniqueAreas.find(area => area.nom === areaToAdd.nom)) uniqueAreas.push(areaToAdd);
            });
            setCategoriesToFilter(uniqueCategories);
            setAreasToFilter(uniqueAreas);
        }
    }, []);

    useEffect( () => {
        if(dataRecettesMealDb.length > 0){
            switch (whatToShowType) {
                case "":
                setRecetteToDisplay(dataRecettesMealDb);
                break;
                case "categories":
                    const category = dataCategories.find(cat => cat.id === selectedCategory);
                    const recettesByCategory = dataRecettesMealDb.filter(recette => recette.category === category.nom);
                    setRecetteToDisplay(recettesByCategory);
                    break;
                case "nationalites":
                    const area = dataAreas.find(are => are.id === selectedArea);
                    const recettesByArea = dataRecettesMealDb.filter(recette => recette.area === area.nom);
                    setRecetteToDisplay(recettesByArea);
                    break;
                    default:
                        break;
            }
        }
    }, [whatToShowType, selectedCategory, selectedArea]);

    return ( 
        <>
            <PageTitle text="Mes recettes" />
            {(!dataRecettesMealDb.length > 0) && <div>
                <PageDescription text="Votre album de recettes est vide. Retournez à l'accueil pour en trouver ou créez vos propres recettes." />
                <div className="mt-4 flex flex-row justify-center gap-2">
                    <Link to="/" text="Accueil" />
                    <Link to="/recette/nouvelle" text="Créer une recette" />
                </div>
            </div>}
            {(dataRecettesMealDb.length > 0) && 
                <>
                    <PageTitleDescription text="Votre album de recettes ultimes" />
                    <div className="flex flex-row justify-between mt-4 bg-stone-200">
                        <Button onClick={ toggleFilters } text="Filtrer" type="linkcontrol" expandable={true} active={filters} />
                        <Link to="/recette/nouvelle" text="Créer une recette" type="linkcontrol" />
                    </div>
                    { filters && <div className="bg-stone-300 px-3 pt-2 pb-3 md:px-4 md:pt-3 md:pb-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                        <div className="">
                            <Select hasBtn={false} onChange={ changeCategory } label="Filtrer par catégorie" unique="limit-categories" options={categoriesToFilter} placeholder="Catégorie" state={selectedCategory} active={(whatToShowType === "categories")} />
                        </div>
                        <div className="mt-3 pt-1 border-t border-stone-900/20 md:border-0 md:pt-0 md:mt-0">
                            <Select hasBtn={false} onChange={ changeArea } label="Filtrer par nationalité" unique="limit-origins" options={areasToFilter} placeholder="Nationalité" state={selectedArea} active={(whatToShowType === "nationalites")} />
                        </div>
                        { (whatToShowType) &&

                            <div className="mt-3 pt-2 border-t border-stone-900/20 md:border-0 md:pt-0 md:mt-0  self-end">
                                <Button onClick={ removeFilter } text="Retirer le filtre" type="inverted" extraClasses="font-normal py-2 md:py-2 md:text-sm" />
                            </div>
                        }
                        {/*<div className="mt-3 pt-1 border-t border-stone-900/20 md:border-0 md:pt-0 md:mt-0">
                            <Select hasBtn={false} onChange={toggleFilters} label="Filtrer par source" unique="limit-source" btntext="Filtrer" />
                        </div>*/}
                    </div> }
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:mt-8 lg:grid-cols-4 xl:grid-cols-5">
                        {/*
                        <div className="shadow-lg bg-white self-start">
                            <div className="bg-home-bloc-xs bg-center py-16">
                                <p className="w-full bg-white/80 text-center p-4 text-stone-800 text-2xl uppercase font-normal">Poulet</p>
                            </div>
                        </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:col-span-2 lg:col-span-3 xl:col-span-4">*/}
                        { recetteToDisplay.map( (recette, index) => (
                            <CardRecette key={`filtered${index}`} recette={{ category: recette.category, id:recette.id, name:recette.name, area:recette.area, img:recette.img }} />
                        ))}
                        {/*</div>*/}
                    </div>
                </>
            }
        </>
    );
}
 
export default MesRecettes;