const Button = ({ text, onClick, extraClasses, type }) => {

    const types = {
        fullWidthMobile: "w-full",
        select: "rounded-s-none"
    }

    return ( 
        <button onClick={onClick} 
        className={`
            py-2 px-3 bg-stone-800 block text-sm rounded-md text-white font-light transition 
            hover:bg-stone-700 hover:text-lime-500 
            ${ (types[`${type}`] ? types[`${type}`] : '' ) }
            ${ extraClasses }
        `}>{ text }</button>
     );
}
 
export default Button;