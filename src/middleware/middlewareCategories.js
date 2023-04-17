import { categoriesLocalData } from '../data/categories';

export default function middlewareCategories(categoriesAPI){
    
    const categoriesFiltered = categoriesLocalData.categories.filter( category => {
        let match = false;
        categoriesAPI.categories.find( ({ strCategory, strCategoryThumb, strCategoryDescription, idCategory }) => {
            if(strCategory === category.name){
                if(category.id === "") category.id = idCategory;
                if(category.img === "") category.img = strCategoryThumb;
                if(category.description === "") category.description = strCategoryDescription;
                match = true;
            }
        });
        return match;
    });

    return(categoriesFiltered);
}