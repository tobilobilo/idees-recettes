import { CheckCircleIcon, XCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import Button from '../../components/form/Button';

const Alert = () => {
    const message = "Alert!"
    const [display, setDisplay] = useState(false);

    function closeAlert() {
        setDisplay(false);
    }

    return ( 
        <>
            { display && <div className="fixed z-20 inset-x-2 bottom-0 text-sm p-4 bg-stone-800 text-white font-normal 
            flex flex-row items-center rounded-t-lg gap-4 border-b-4 border-lime-500">
                <div className="flex flex-row grow items-center gap-2">
                    <CheckCircleIcon className="w-7 h-7 text-lime-500" />
                    <ExclamationCircleIcon className="w-7 h-7 text-red-500" />
                    { message }
                </div>
                <button onClick={ closeAlert } className="text-white-500 transition p-1 bg-stone-800 rounded-full hover:text-lime-500 hover:bg-stone-600">
                    <XCircleIcon className="w-8 h-8" />
                </button>
            </div> }
        </>
     );
}
 
export default Alert;