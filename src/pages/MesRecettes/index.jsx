import PageTitle from '../../components/ui/PageTitle';
import PageDescription from '../../components/ui/PageDescription';
import PageTitleDescription  from '../../components/ui/PageTitleDescription';
import Link from '../../components/ui/Link';
import Button from '../../components/form/Button';
import Select from '../../components/form/Select';
import { useState } from 'react';

const MesRecettes = () => {
    const [recettes, setRecettes] = useState(true);
    const [filters, setfilters] = useState(false);

    const toggleFilters = () => {
        setfilters(!filters);
    }

    return ( 
        <>
            <PageTitle text="Mes recettes" />
            {!recettes && <div>
                <PageDescription text="Votre album de recettes est vide. Retournez à l'accueil pour en trouver ou créez vos propres recettes." />
                <div className="mt-4 flex flex-row justify-center gap-2">
                    <Link to="/" text="Accueil" />
                    <Link to="/recette/nouvelle" text="Créer une recette" />
                </div>
            </div>}
            {recettes && 
                <>
                    <PageTitleDescription text="Votre album de recettes ultimes" />
                    <div className="flex flex-row justify-between mt-4 bg-stone-200">
                        <Button onClick={ toggleFilters } text="Filtrer" type="linkcontrol" expandable={true} />
                        <Link to="/recette/nouvelle" text="Créer une recette" type="linkcontrol" />
                    </div>
                    { filters && <div className="bg-stone-300 px-3 pt-2 pb-3 md:px-4 md:pt-3 md:pb-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                        <div className="">
                            <Select onClick={toggleFilters} label="Filtrer par catégorie" unique="limit-categories" btntext="Filtrer" />
                        </div>
                        <div className="mt-3 pt-1 border-t border-stone-900/20 md:border-0 md:pt-0 md:mt-0">
                            <Select onClick={toggleFilters} label="Filtrer par Nationalité" unique="limit-origins" btntext="Filtrer" />
                        </div>
                        <div className="mt-3 pt-1 border-t border-stone-900/20 md:border-0 md:pt-0 md:mt-0">
                            <Select onClick={toggleFilters} label="Filtrer par source" unique="limit-source" btntext="Filtrer" />
                        </div>
                    </div> }
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <div className="shadow-xl bg-white self-start">
                            <div className="bg-home-bloc-xs bg-center py-16">
                                <p className="w-full bg-white/80 text-center p-4 text-stone-800 text-2xl uppercase font-normal">Poulet</p>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:col-span-2 lg:col-span-3 xl:col-span-4">
                            <div className="shadow-xl bg-white ">
                                <div className="bg-home-bloc-xs bg-center py-24">
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-row justify-between text-stone-400 text-sm">
                                        <span>Poulet</span>
                                        <span>Français</span>
                                    </div>
                                    <h4 className="w-full text-left text-stone-800 text-lg font-medium pt-2 leading-tight uppercase">Poulet aux ananas</h4>
                                </div>
                                <Link to="/recette/1111" text="Détail" type="linkcard" />
                            </div>
                            
                            <div className="shadow-xl bg-white ">
                                <div className="bg-home-bloc-xs bg-center py-24">
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-row justify-between text-stone-400 text-sm">
                                        <span>Poulet</span>
                                        <span>Français</span>
                                    </div>
                                    <h4 className="w-full text-left text-stone-800 text-lg font-medium pt-2 leading-tight uppercase">Poulet aux ananas</h4>
                                </div>
                                <Link to="/recette/1111" text="Détail" type="linkcard" />
                            </div>
                            <div className="shadow-xl bg-white ">
                                <div className="bg-home-bloc-xs bg-center py-24">
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-row justify-between text-stone-400 text-sm">
                                        <span>Poulet</span>
                                        <span>Français</span>
                                    </div>
                                    <h4 className="w-full text-left text-stone-800 text-lg font-medium pt-2 leading-tight uppercase">Poulet aux ananas</h4>
                                </div>
                                <Link to="/recette/1111" text="Détail" type="linkcard" />
                            </div>
                            <div className="shadow-xl bg-white ">
                                <div className="bg-home-bloc-xs bg-center py-24">
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-row justify-between text-stone-400 text-sm">
                                        <span>Poulet</span>
                                        <span>Français</span>
                                    </div>
                                    <h4 className="w-full text-left text-stone-800 text-lg font-medium pt-2 leading-tight uppercase">Poulet aux ananas</h4>
                                </div>
                                <Link to="/recette/1111" text="Détail" type="linkcard" />
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}
 
export default MesRecettes;