const PageTitle = (props) => {
    return ( 
        <h2 className="text-stone-800 text-center text-sm md:text-lg">
            { props.text }
        </h2>
     );
}
 
export default PageTitle;