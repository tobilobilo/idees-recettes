import Logo from './ui/Logo';
import Button from './form/Button';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { turnOff, updateLocalStorage } from '../redux/slices/dataWarning';

const Footer = () => {
    const dataWarn = useSelector( (state) => state.dataWarning.value);
    const dispatch = useDispatch();

    function dataWarningOff() {
        dispatch(turnOff());
        dispatch(updateLocalStorage());
    }

    return ( 
        <footer className={`font-body max-w-screen-2xl flex flex-row m-auto mt-8 py-2 px-4 md:px-8 ${(dataWarn) ? 'pb-20' : ''}`}>
            <Logo classNames="w-12 fill-stone-800" />
            <div className="flex flex-col justify-center px-2 md:px-4 text-sm leading-tight">
                <p className="font-bold">Jean-Pierre Rose</p>
                <time className="font-normal text-stone-800">2023</time>
            </div>
            {dataWarn && <div className="fixed bottom-0 right-4 ml-4 text-sm p-4 bg-stone-800 text-white font-thin flex flex-row items-center rounded-t-lg gap-4 border-b-4 border-lime-500">
                <p>Le contenu de ce site est fournis par l'api <Link className="text-lime-500 underline" to="https://www.themealdb.com/" target="_blank" rel="noopener noreferrer">themealdb.com</Link></p>
                <Button onClick={ dataWarningOff } text="fermer" type="inverted" />
            </div>}
        </footer>
     );
}
 
export default Footer;