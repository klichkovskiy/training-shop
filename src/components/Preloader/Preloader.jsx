import './Preloader.css'

const Preloader = () => {
    return (
        <div className="preloader" data-test-id="loader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
