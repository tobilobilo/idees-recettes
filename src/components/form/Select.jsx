import { useEffect } from 'react';
import Button from './Button';

function mega() {
    console.log('test');
}

const Select = ({ label, unique, options, state=null, onClick = () => {}, onChange = () => {}, btntext="Afficher", placeholder="Faites un choix" }) => {
    
    return ( 
        <>
            <label htmlFor={unique} className="text-sm md:text-base">{label}</label>
            <div className="flex flex-row md:mt-1">
                <select name={unique} id={unique} className="grow py-2 px-2 text-sm rounded-s-md" onChange={(event) => onChange(event.target.value)} value={state}>
                    <option value="" hidden>{ placeholder }</option>
                    { options && options.map( ({id, nom}) => (
                        <option value={id} key={`${nom}-${id}`}>{ nom }</option>
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
                <Button onClick={onClick} text={btntext} type="select" />
            </div>
        </>
     );
}
 
export default Select;