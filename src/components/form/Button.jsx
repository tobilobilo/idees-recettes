import { twMerge } from 'tailwind-merge'

const Button = ({ text, onClick, extraClasses, type }) => {

    const types = {
        fullWidthMobile: "w-full",
        select: "rounded-s-none",
        inverted: "text-stone-800 bg-white"
    }
    const classes = twMerge(`
        py-2 px-3 bg-stone-800 block text-sm rounded-md text-white font-light transition 
        hover:bg-stone-700 hover:text-lime-500 
        ${ (types[`${type}`] ?? '' ) }
        ${ extraClasses ?? '' }
    `);

    return ( 
        <button onClick={onClick} 
        className={classes}>{ text }</button>
     );
}
 
export default Button;