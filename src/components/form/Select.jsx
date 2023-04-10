import Button from './Button';

const Select = ({ label, unique, onClick, btntext="Afficher" }) => {
    return ( 
        <>
            <label htmlFor={unique} className="text-sm md:text-base">{label}</label>
            <div className="flex flex-row md:mt-1">
                <select name={unique} id={unique} className="grow py-2 px-2 text-sm rounded-s-md">
                    <option value="0">Option 1</option>
                    <option value="1">Option 2</option>
                    <option value="2">Option 3</option>
                    <option value="3">Option 4</option>
                </select>
                <Button onClick={onClick} text={btntext} type="select" />
            </div>
        </>
     );
}
 
export default Select;