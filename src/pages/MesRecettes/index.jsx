import PageTitle from '../../components/ui/PageTitle';
import PageDescription from '../../components/ui/PageDescription';
import PageTitleDescription  from '../../components/ui/PageTitleDescription';
import Link from '../../components/ui/Link';
import { useState } from 'react';

const MesRecettes = () => {
    const [recettes, setRecettes] = useState(true);

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
                    <div className="flex flex-row justify-center mt-2">
                        <Link to="/recette/nouvelle" text="Créer une recette" />
                    </div>
                    <div className="mt-4 grid gap-4">
                        <div className="shadow-xl ">
                            <div className="bg-home-bloc-xs bg-center py-16">
                                <p className="w-full bg-white/80 text-center p-4 text-stone-800 text-2xl uppercase font-normal">Poulet</p>
                            </div>
                        </div>
                        <div>
                            <div className="shadow-xl ">
                                <div className="bg-home-bloc-xs bg-center py-24">
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-row justify-between text-stone-400 text-sm">
                                        <span>Poulet</span>
                                        <span>Français</span>
                                    </div>
                                    <h4 className="w-full text-left text-stone-800 text-lg font-medium leading-tight uppercase">Poulet aux ananas</h4>
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