import icon from '../../assets/svg/loading-icon.svg'

const LoadingIcon = () => {
    return ( 
        <div className="pt-4 md:pt-8">
            <img src={icon} alt="Chargement ..." className="animate-spin origin-center w-10 mx-auto md:w-14" />
        </div>
     );
}
 
export default LoadingIcon;