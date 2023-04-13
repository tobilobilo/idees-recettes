import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Button = ({ text, onClick, extraClasses, type, expandable=false, singleClick=false, active=false }) => {
    const [disable, setDisable] = useState(false);
    //const [active, setActive] = useState(false);

    const types = {
        fullWidthMobile: "w-full",
        select: "rounded-s-none",
        inverted: "text-stone-800 bg-white",
        linkcard: "uppercase bg-transparent text-stone-500 font-normal text-md w-full text-center rounded-none border-t border-stone-200 py-2 hover:bg-stone-100",
        linkcontrol: "uppercase bg-transparent text-stone-500 font-normal text-sm text-center rounded-none py-2 px-3 hover:bg-stone-300 hover:text-stone-800 md:py-3 md:px-4"
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
            { text } 
            { expandable && <ChevronDownIcon className="h-4 w-4 inline md:h-5 md:w-5" /> }
        </button>
     );
}
 
export default Button;