const Button = (props) => {
    return ( 
        <button onClick={props.onClick} 
        className={`
            py-2 px-3 bg-stone-800 block text-sm rounded-md text-white font-light transition 
            hover:bg-stone-700 hover:text-lime-500 
            ${ props.extraClasses }
        `}>{ props.text }</button>
     );
}
 
export default Button;