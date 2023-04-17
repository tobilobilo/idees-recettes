import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { displayAlert } from './redux/slices/alerts';
import { setData as setDataAreas, updateLocalStorage as updateLocalStorageDataAreas } from './redux/slices/areas';
import { setData as setDataCategories, updateLocalStorage as updateLocalStorageDataCategories } from './redux/slices/categories';
import useFetch from './hooks/useFetch';
import middlewareNationalites from './middleware/middlewareNationalites';
import middlewareCategories from './middleware/middlewareCategories';

export default function Data(){
    // Get data pour l'app (area, categories, recettes ajoutées)
    const dispatch = useDispatch();
    const dataAreas = useSelector( (state) => state.areas.value );
    const { loading: loadingArea, error: errorArea, value: fetchArea } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`,
    {}, [] );
    const dataCategories = useSelector( (state) => state.categories.value );
    const { loading: loadingCategories, error: errorCategories, value: fetchCategories } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`,
    {}, [] );

    useEffect( () => {
        if(typeof(errorArea) === "object") {
            const alertData = {
            message: "Erreur lors de la récupération des nationalités.",
            status: "error"
            }
            dispatch(displayAlert({...alertData}));
        }
    }, [errorArea]);
    useEffect( () => {
        if(typeof(errorCategories) === "object") {
            const alertData = {
            message: "Erreur lors de la récupération des catégories.",
            status: "error"
            }
            dispatch(displayAlert({...alertData}));
        }
    }, [errorCategories]);
    useEffect( () => {
        if(!dataAreas && fetchArea){
            dispatch(setDataAreas(middlewareNationalites(fetchArea)));
            dispatch(updateLocalStorageDataAreas());
        }
    }, [dataAreas, fetchArea]);
    useEffect( () => {
        if(!dataCategories && fetchCategories) {
            dispatch(setDataCategories(middlewareCategories(fetchCategories)));
            dispatch(updateLocalStorageDataCategories());
        }
    }, [dataCategories, fetchCategories]);

}