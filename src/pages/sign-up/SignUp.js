import React, { useState, useContext } from 'react';
import { AuthContext } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import LanguageButton from '../../components/LanguageButton';
import { signUp } from '../../api/api';
import Alert from "../../components/Alert";
import Button from '../../components/Button';
import { useTranslation } from "react-i18next";


const SignUp = () => {
    const { setUser, loading, setLoading } = useContext(AuthContext);
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
    });
    const [showModal, setShowModal] = useState(false);
    const [successCall, setSuccessCall] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    
   

 // No value for email and password button is disabled
    let isDisabled = !(formData.password && formData.passwordRepeat);
     
    let passwordDiff = formData.password !== formData.passwordRepeat ? 'Passwords do not match' :  ''; 
           

    


    const onSubmit = async (event) => {
        event.preventDefault();
        const body = formData;
        setLoading(true)
        try { 
            const response = await signUp(body);
            setUser(response.data)
            setLoading(false);
            setSuccessCall(true);
        } catch (err) {
            setErrors(err.response.data.validationErrors);
            setLoading(false);
        }  
    };

    /** Update form data field */
    function handleChange(evt) {
        const { id, value } = evt.target;
        const copyErrors = errors ;
        delete copyErrors[id];
        setFormData(data => ({...data, [id] :  value}));
    }

    return (
            <div 
                className="col-lg-6 offset-lg-3 col-md-8 offset-md-2"
                data-testid='signup'   
            >
                
                {
                    successCall === false && (

                        <form className=" card mt-2 bg-black bg-gradient bg-opacity-75 text-light" data-testid='form-sign-up'>
                            {/* ----header----- */}
                            <div className="card-header py-2 px-4">
                                <h1 className="text-start">
                                    {t('signUp')}
                                </h1>
                            </div>

                            {/* ------body----- */}
                            <div className="card-body">
                                {/* ------username input------ */}
                                <Input 
                                    id='username'
                                    testId='username'
                                    labelText={t('username')}
                                    onChange={handleChange}
                                    help={errors.username}
                                />

                                {/* ------email input------ */}
                                <Input 
                                    id='email'
                                    testId='email'
                                    labelText={t("email")}
                                    onChange={handleChange}
                                    help={errors.email}
                                />


                                {/* ------password input------ */}
                                <Input 
                                    id='password'
                                    testId='password'
                                    labelText={t('password')}
                                    type='password'
                                    onChange={handleChange}
                                    help={errors.password}
                                />
                                  

                                {/* ------password match input------ */}
                                <Input 
                                    id='passwordRepeat'
                                    testId='passwordRepeat'
                                    labelText={t("passwordRepeat")}
                                    type='password'
                                    onChange={handleChange}
                                    help={passwordDiff}
                                /> 
                        </div>

                                {/* ------button------ */}
                                <div className=" card-footer d-grid gap-2 my-2">
                                    <Button 
                                        testId={'signup-page-button'}
                                        color={'warning'}
                                        disabled={isDisabled} 
                                        onClick={onSubmit}
                                        labelText={t('signUp')}
                                    />
                                </div>
                        </form>
                    )
                } 

                { 
                    successCall === true && (
                        <div className="container-fluid text-center my-4 mx-2" title="successText">
                            <Alert type="success" text="Please check your e-mail to activate your account"/>
                            {/* ------button------ */}
                                <div className="d-grid gap-2 my-2">
                                    <Button 
                                        testId={'to-login-button'}
                                        labelText={t('logIn')}
                                        color={'warning'}
                                        onClick={() => {navigate('/login')}}
                                        isLoading={loading}
                                    />
                                </div>
                        </div>
                    )
                } 

                <div className=" mt-4 py-4 d-grid gap-4 text-center">
                    <Button 
                        testId={'lang'}
                        labelText={t('footerTitle')}
                        color={'outline-warning'}
                        onClick={() => { setShowModal(true)}}
                        isLoading={loading}
                    />

                    {showModal && <LanguageButton onClick={() => { setShowModal(false)} }/>}  
                </div>
                  
            </div>
    );
};

export default SignUp;