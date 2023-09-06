import { useTranslation } from "react-i18next";
import { languageArray } from "../constants/constants";

const LanguageButton = (props) => {
    /*
        Map through an array of objects that resides in constance folder. Create a image for each object.
        Set the source for the flags api flag link, title for countries name, alt for message, and use the
        changeLanguage function from i18 to select which json file to read.
    */ 
    const { i18n, t } = useTranslation();
    const { onClick } = props;

    return(
         <div className="offcanvas offcanvas-end bg-dark bg-gradient show"  tabIndex="-1" id="offcanvasExample">
            
            <div className="offcanvas-header">
                <h5 className="text-white">{t('footerTitle')}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={onClick} aria-label="Close"></button>
            </div>

            <div className="offcanvas-body justify-content-end flex-grow-1 pe-3 mb-4">
          
                    {languageArray.map((flag) => (
                    
                        <div key={`${flag.link}-${flag.type}`} className="p-4 navbar-nav-scroll scroll-h-100">
                        
                            <img 
                                key={`${flag.name}-${flag.type}`}
                                src={`https://flagsapi.com/${flag.link}/flat/64.png`}
                                title={flag.name}
                                onClick={() => i18n.changeLanguage(flag.type)}
                                alt={flag.alt}
                                className="border border-warning rounded border-opacity-25 p-2 mb-2 bg-secondary bg-gradient"
                                height={200}
                                width={200}
                                
                            />
        
                                <div>
                                    <h3 className='text-white'>{flag.name}</h3>
                                </div>
                       </div>
                
                    ))}

           </div>
        </div>
    )
};

export default LanguageButton;