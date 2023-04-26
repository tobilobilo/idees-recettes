export default function addRecetteMealDB(recetteToAdd, recettes) {
    let nouvelleRecette = true;
    recettes.map(recette => {
        if(recette.id === recetteToAdd.id) nouvelleRecette = false;
        return
    })
    if(nouvelleRecette) {
        return {added: true, response: recetteToAdd}
    }
    
    return { added: false }
}