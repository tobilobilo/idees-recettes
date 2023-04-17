import { nationalitesLocalData } from '../data/nationalites';

export default function middlewareNationalites(nationalitesAPI){

    const nationalitesFiltered = nationalitesLocalData.nationalites.filter( nationalite => {
        let match = false;
        nationalitesAPI.meals.find( ({ strArea }) => {
            if( strArea === nationalite.name){
                match = true;
            }
        });
        return match;
    });

    return(nationalitesFiltered);
}