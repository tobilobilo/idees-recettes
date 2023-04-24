import Link from '../../components/ui/Link';

const CardRecette = ({ recette }) => {
    return ( 
        <div className="shadow-lg bg-white flex flex-col">
            { recette.img && <div className="bg-home-bloc-xs bg-center py-24 bg-cover" style={{ "backgroundImage": `url('${recette.img}')` }}>
            </div> }
            <div className="p-4">
                <div className="flex flex-row justify-between text-stone-400 text-sm">
                    { recette.category && <span>{recette.category}</span> }
                    { recette.area && <span>{recette.area}</span> }
                </div>
                { recette.name && <h4 className="w-full text-left text-stone-800 text-lg font-medium pt-2 leading-tight uppercase">{ recette.name }</h4> }
            </div>
            <Link to={`/recette/${recette.id}`} text="Détail" type="linkcard" />
        </div>
     );
}
 
export default CardRecette;