import Link from '../../components/ui/Link';
import Button from '../../components/form/Button';
import { useState, useEffect, useMemo } from 'react'
import useFetch from '../../hooks/useFetch';
import LoadingIcon from '../../components/ui/LoadingIcon'
import CardTheme from './CardTheme';
import CardRecette from './CardRecette';

const Results = ({id, fetchUrl, dataarray}) => {

        //console.log(fetchUrl, id, dataarray)
        const [fetchName, setFetchName] = useState();
        const [fetchInfo, setFetchInfo] = useState();
        
        useMemo( () => {
            console.log('dataarray', dataarray);
            if(dataarray) {
                const data = dataarray.find( (obj) => obj.id === id );
                setFetchInfo(data);
                setFetchName(data.name);
                console.log('data', data);
            }
            
        }, [id]);

        const { loading, error, value } = useFetch(
            fetchUrl + fetchName,
            {},
            [id]
        );


    return (
        <>
            {loading && <LoadingIcon /> }
            {error && <p>Erreur</p>}
            {value && 
                <>
                    {console.log('value.meals', value.meals )}
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <CardTheme nom={fetchInfo.nom} img={fetchInfo.img} />
                        {/* value.meals.map( (item) => (
                            <CardRecette />
                        )) */}
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:col-span-2 lg:col-span-3 xl:col-span-4">
                                <div className="shadow-lg bg-white ">
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
 
export default Results;