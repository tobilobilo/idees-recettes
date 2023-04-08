const PageTitle = (props) => {
    return ( 
        <h2 className="text-stone-800 text-lg text-center pt-6 md:text-2xl">
            { props.text }
        </h2>
     );
}
 
export default PageTitle;