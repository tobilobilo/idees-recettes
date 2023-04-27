const CardTheme = ({ id, nom, img, description}) => {
    return ( 
        <div className="shadow-lg bg-white self-start">
            <div className="py-16 bg-center bg-no-repeat bg-cover" style={{ "backgroundImage": `url('/idees-recettes${img}')` }}>
                <p className="w-full bg-white/80 text-center p-4 text-stone-800 text-2xl uppercase font-normal">{ nom }</p>
            </div>
            { description && <div className="text-stone-800 text-sm p-4 leading-tight">
                { description }
            </div> }
        </div>
     );
}
 
export default CardTheme;