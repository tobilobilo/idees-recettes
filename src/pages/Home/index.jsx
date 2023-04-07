import * as React from 'react';
import Logo from '../../components/ui/Logo';
import PageTitle from '../../components/ui/PageTitle';
import PageSubTitle from '../../components/ui/PageSubTitle';
import Button from '../../components/form/Button';
import Select from '../../components/form/Select';

const Home = () => {

    const logger = () => {
        console.log('Hello');
    }
    
    return ( 
        <>
            <PageTitle text="Mes Idées Recettes" />
            <PageSubTitle text="Le guide ultime pour trouver l'inspiration culinaire" />
            <Logo classNames="w-24 fill-lime-500 m-auto sm:w-28 md:w-32" />
           
            <div className="bg-stone-800 rounded-2xl mt-4 overflow-hidden bg-home-bloc-xs bg-right bg-center bg-no-repeat 
            md:bg-home-bloc-md">
                <div className="mt-24 mb-12 p-4 bg-white/80 relative
                 sm:mt-0 sm:mb-0 sm:w-1/2 md:max-w-md sm:py-12 sm:px-4
                 sm:after:content-[''] sm:after:w-20 sm:after:h-full sm:after:block sm:after:absolute sm:after:top-0 sm:after:left-full
                 md:py-12 md:px-8">
                    <h3 className="text-start text-2xl text-stone-800 md:text-3xl">
                        Trouver l'inspiration
                    </h3>
                    <div className="mt-2 pt-2">
                        <Select onClick={logger} label="Par catégories" unique="by-categories" />
                    </div>
                    <div className="mt-3 pt-1 border-t border-stone-900/20">
                        <Select onClick={logger} label="Par nationalités" unique="by-origins" />
                    </div>
                    <div className="mt-2 pt-2 border-t border-stone-900/20">
                        <Button onClick={logger} text="Afficher une recette aléatoire" type="fullWidthMobile" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;