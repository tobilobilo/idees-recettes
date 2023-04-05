const PageTitle = (props) => {
    return ( 
        <h1 className="text-lime-500 text-2xl text-center pt-8 md:text-4xl md:pt-12">
            { props.text }
        </h1>
     );
}
 
export default PageTitle;