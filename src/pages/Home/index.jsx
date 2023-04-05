import * as React from 'react';
import Logo from '../../components/ui/Logo';
import PageTitle from '../../components/ui/PageTitle';
import PageSubTitle from '../../components/ui/PageSubTitle';

const Home = () => {
    
    return ( 
        <>
            <PageTitle text="Mes Idées Recettes" />
            <PageSubTitle text="Le guide ultime pour trouver l'inspiration culinaire" />
            <Logo classNames="w-24 fill-lime-500 m-auto sm:w-28 md:w-32" />
           
            <div className="bg-lime-500 rounded-2xl mt-4 overflow-hidden bg-home-bloc-xs bg-center bg-no-repeat">
                <div className="mt-24 mb-12 p-4 bg-white/80">
                    <h3 className="text-start text-2xl text-stone-800">
                        Trouver l'inspiration
                    </h3>
                    <div className="mt-2 pt-2">
                        <label htmlFor="by-categories" className="text-sm">Par catégories</label>
                        <div className="flex flex-row">
                            <select name="by-categories" id="by-categories" className="grow py-2 px-2 border text-stone-800 border-stone-800 text-sm rounded-s-md">
                                <option value="0">Option 1</option>
                                <option value="1">Option 2</option>
                                <option value="2">Option 3</option>
                                <option value="3">Option 4</option>
                            </select>
                            <button className="py-2 px-2 bg-stone-800 text-sm rounded-e-md text-white font-light transition hover:bg-stone-700">Afficher</button>
                        </div>
                    </div>
                    <div className="mt-3 pt-1 border-t border-stone-900/20">
                        <label htmlFor="by-origins" className="text-sm">Par nationalités</label>
                        <div className="flex flex-row">
                            <select name="by-categories" id="by-categories" className="grow py-2 px-2 border text-stone-800 border-stone-800 text-sm rounded-s-md">
                                <option value="0">Option 1</option>
                                <option value="1">Option 2</option>
                                <option value="2">Option 3</option>
                                <option value="3">Option 4</option>
                            </select>
                            <button className="py-2 px-2 bg-stone-800 text-sm rounded-e-md text-white font-light transition hover:bg-stone-700">Afficher</button>
                        </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-stone-900/20">
                        <button className="py-2 px-2 bg-stone-800 block w-full text-sm rounded-md text-white font-light transition hover:bg-stone-700">Afficher une recette aléatoire</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;