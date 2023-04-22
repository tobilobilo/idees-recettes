import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router-dom';

const Button = ({ text, to, extraClasses, type }) => {

    const types = {
        fullWidthMobile: "w-full",
        select: "rounded-s-none",
        inverted: "text-stone-800 bg-white",
        linkcard: "uppercase bg-transparent text-stone-500 font-normal text-md w-full text-center rounded-none border-t border-stone-200 py-2 mt-auto hover:bg-stone-100",
        linkcontrol: "uppercase bg-transparent text-stone-500 font-normal text-sm text-center rounded-none py-2 px-3 hover:bg-stone-300 hover:text-stone-800 md:py-3 md:px-4"
    }
    const classes = twMerge(`
        py-1 px-4 bg-stone-800 inline-block text-sm rounded-md text-white font-light transition 
        md:py-1 md:px-5 md:text-base
        hover:bg-stone-700 hover:text-lime-500 
        ${ (types[`${type}`] ?? '' ) }
        ${ extraClasses ?? '' }
    `);

    return ( 
        <Link to={to} 
        className={classes}>{ text }</Link>
     );
}
 
export default Button;