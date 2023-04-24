import Link from '../../components/ui/Link';
import Button from '../../components/form/Button';
import { useState, useEffect, useMemo, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { displayAlert } from '../../redux/slices/alerts';
import LoadingIcon from '../../components/ui/LoadingIcon'
import CardTheme from '../../components/ui/CardTheme';
import CardRecette from '../../components/ui/CardRecette';

const Results = ({id, fetchUrl, dataTypeArray}) => {
    console.log('re-renderz')
        const getTheme = useRef();
        const [fetchRecettes, setFetchRecettes] = useState();
        const [fetchRecettesLoading, setFetchRecettesLoading] = useState(false);
        const dispatch = useDispatch();

        function displayMessage(message="Une erreur s'est produite", status="error") {
            const alertData = {
                message: message,
                status: status
            }
            dispatch(displayAlert({...alertData}));
        }
        
        useMemo( () => {
            if(dataTypeArray) {
                const data = dataTypeArray.find( (obj) => obj.id === id );
                getTheme.current = data;
                setFetchRecettesLoading(true);
                axios.get(fetchUrl + data.name)
                    .then((response) => {
                        setFetchRecettesLoading(false);
                        if(!response.data.meals) {
                            displayMessage("Aucune recette trouvée");
                            return
                        }
                        setFetchRecettes(response.data);
                    })
                    .catch((error) => {
                        setFetchRecettesLoading(false);
                        displayMessage("Une erreur est survenue");
                    });
            }
        }, [id]);

    return (
        <>
            {fetchRecettesLoading && <LoadingIcon /> }
            {fetchRecettes && 
                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:mt-8 lg:grid-cols-4 xl:grid-cols-5">
                    <CardTheme nom={getTheme.current.nom} img={getTheme.current.img} />
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:col-span-2 lg:col-span-3 xl:col-span-4">
                        { fetchRecettes.meals.map( (item, index) => (
                            <CardRecette key={index} recette={{ category: getTheme.current.nom, id:item.idMeal, name:item.strMeal, area:undefined, img:item.strMealThumb }} />
                        )) }
                    </div>
                </div>
            }
        </>
     );
}
 
export default Results;