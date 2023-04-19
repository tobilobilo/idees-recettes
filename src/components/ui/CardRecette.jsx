import Link from '../../components/ui/Link';

const CardRecette = () => {
    return ( 
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
     );
}
 
export default CardRecette;