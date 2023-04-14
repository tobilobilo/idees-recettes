import { CheckCircleIcon, XCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import Button from '../../components/form/Button';
import { useSelector, useDispatch } from 'react-redux';
import { removeAlert } from '../../redux/slices/alerts';
import { useEffect } from 'react';

const Alert = () => {
    const alert = useSelector( (state) => state.alert.value);
    const message = useSelector( (state) => state.alert.message);
    const status = useSelector( (state) => state.alert.status);
    const dispatch = useDispatch();
    let timeoutToRemoveAlert = null;

    function closeAlert() {
        clearTimeout(timeoutToRemoveAlert);
        dispatch(removeAlert());
    }

    useEffect(() => { // quand le message d'alerte change
        if(alert) {
            clearTimeout(timeoutToRemoveAlert);
            timeoutToRemoveAlert = setTimeout( () => closeAlert(), 5000);
        }
    }, [message])

    return ( 
        <>
            <div aria-hidden={!alert} className={`fixed z-20 inset-x-2 bottom-0 text-sm p-4 bg-stone-800 text-white font-normal 
            flex flex-row items-center rounded-t-lg gap-4 border-b-4 border-lime-500 transition  ${ (alert) ? "translate-y-0" : "translate-y-full"}`}>
                <div className="flex flex-row grow items-center gap-2">
                    { (status === "success") && <CheckCircleIcon className="w-7 h-7 text-lime-500 shrink-0" /> }
                    { (status === "error") && <ExclamationCircleIcon className="w-7 h-7 text-red-500 shrink-0" /> }
                    { message }
                </div>
                { alert && <button onClick={ closeAlert } className="text-white-500 transition p-1 bg-stone-800 rounded-full hover:text-lime-500 hover:bg-stone-600">
                    <XCircleIcon className="w-8 h-8" />
                </button> }
            </div>
        </>
     );
}
 
export default Alert;