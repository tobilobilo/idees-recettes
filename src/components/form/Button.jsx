import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Button = ({ text, extraClasses, type, onClick = () => {}, expandable=false, singleClick=false, active=false, preIcon="" }) => {
    const [disable, setDisable] = useState(false);
    //const [active, setActive] = useState(false);
    const chevronClasses = "h-4 w-4 ps-1 inline md:h-5 md:w-5 md:-translate-y-px";
    const preIconClasses = "h-5 w-5 pe-1 inline md:h-5 md:w-5 md:-translate-y-px";

    const types = {
        fullWidthMobile: "w-full",
        select: "rounded-s-none",
        inverted: "text-stone-800 bg-white",
        linkcard: "uppercase bg-transparent text-stone-500 font-normal text-md w-full text-center rounded-none border-t border-stone-200 py-2 hover:bg-stone-100",
        linkcontrol: `uppercase bg-transparent text-stone-500 font-normal text-sm text-center rounded-none py-2 px-3 md:py-3 md:px-4 hover:bg-stone-300 hover:text-stone-800 ${ (active) ? "bg-stone-300 text-stone-800" : "" }`
    }
    const classes = twMerge(`
        py-1 px-4 bg-stone-800 inline-block text-sm rounded-md text-white font-light transition 
        md:py-1 md:px-5 md:text-base
        hover:bg-stone-700 hover:text-lime-500 
        disabled:text-stone-300 disabled:hover:bg-transparent
        ${ (types[`${type}`] ?? '' ) }
        ${ extraClasses ?? '' }
    `);

    function disabling() {
        setDisable(true);
    }

    return ( 
        <button onClick={ () => { onClick(); singleClick && disabling(); } }
        className={classes} 
        {...(expandable ? {"aria-expanded": "false"} : {}) }
        {...(disable ? {"disabled": "disabled"} : {}) }
        >
            { preIcon === "plus" && <PlusIcon className={preIconClasses} /> }
            { text }
            { expandable && ((active) ? <ChevronUpIcon className={chevronClasses} /> : <ChevronDownIcon className={chevronClasses} />) }
        </button>
     );
}
 
export default Button;