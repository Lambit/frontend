import React, { useState, useContext } from 'react';
import LanguageButton from '../../components/LanguageButton';
import Button from '../../components/Button';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/Auth';


const Home = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleLoading = () => {
        setLoading(true);
        try {
            setShowModal(true);
        } catch(error){
            setLoading(false)
        }
        setLoading(false);
    };

    return (

        <div className="container-fluid text-center h-100" data-testid='home'>

            {/* -----Title----- */}
            <div className='container text-white ' data-testid={'home-title'}>
                <div className='row'>
                    <div className='col'>
                        <h1 className='fw-bold text-start'>{t('titleOne')}</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h1 className='fw-bold'> {t('titleTwo')} </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h1 className='fw-bold text-end'>{t('titleThree')}</h1>
                    </div>
                </div>
            </div>
                
            {/* -----Button stack---- */}
            <div 
                className='card bg-transparent border-0 p-2 mt-4 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1'
            >        
             {/* -----Button----- */}            
                <div className=" card-body mt-4 d-grid gap-4">
                     {
                        !user && (
                            
                           <Button 
                               testId={'home-signup'}
                               labelText={t('signUp')}
                               color={'warning'}
                               onClick={() => { navigate('/signup')}}
                               isLoading={loading}
                           /> 
                     )}

                    <Button 
                          testId={'lang'}
                          labelText={t('footerTitle')}
                          color={'outline-warning'}
                          onClick={handleLoading}
                          isLoading={loading}
                      />
                  </div>
            </div>       

            {/* -----Modal----- */}
            {showModal && <LanguageButton onClick={() => { setShowModal(false)} }/>}         
        </div>                 
            
    );
};

export default Home;