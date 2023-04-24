import { useEffect } from 'react';
import Button from './Button';

function mega() {
    console.log('test');
}

const Select = ({ label, unique, options, state=null, onClick = () => {}, onChange = () => {}, hasBtn=true, active=false, btntext="Afficher", placeholder="Faites un choix" }) => {
    console.log(active);
    return ( 
        <>
            <label htmlFor={unique} className="text-sm md:text-base">{label}</label>
            <div className="flex flex-row md:mt-1">
                <select name={unique} id={unique} className={
                    `cursor-pointer grow py-2 px-2 text-sm rounded-s-md 
                    ${(!hasBtn) ? "rounded-md" : "" }
                    ${(active) ? "text-lime-500 bg-stone-800 " : "" }`
                } onChange={(event) => onChange(event.target.value)} value={state}>
                    <option className="bg-white text-stone-800" value="" hidden>{ placeholder }</option>
                    { options && options.map( ({id, nom}) => (
                        <option className="bg-white text-stone-800" value={id} key={`${nom}-${id}`}>{ nom }</option>
                    ))}
                    { !options &&
                        <>
                            <option value="0">Option 1</option>
                            <option value="1">Option 2</option>
                            <option value="2">Option 3</option>
                            <option value="3">Option 4</option>
                        </>
                    }
                </select>
                { hasBtn && <Button onClick={onClick} text={btntext} type="select" /> }
            </div>
        </>
     );
}
 
export default Select;