import Input from "../../components/input/Input";
import Button from "../../components/Button";
import { login } from "../../api/api";
import { useTranslation } from "react-i18next";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import storage from "../../storage/storage";


const LogIn = () => {
    const { setUser, loading, setLoading } = useContext(AuthContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [resError, setResError] = useState();
    const { t } = useTranslation();
    const navigate = useNavigate();

    //clear for when email is detected
    useEffect(() => {
        setResError();
    }, [email, password]);

    // No value for email and password button is disabled
    let isDisabled = !(email && password);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try{
            const response = await login({ email, password });
            setUser({...response.data, email, password});
            storage.setItem('user', response.data);
            setLoading(false);
            navigate(`/`);
        } 
        catch (error) {
            setResError(error.response.data.message);
            setLoading(false)
  
        };

        setLoading(false);   
    };


    return (

            <div 
                className="col-lg-6 offset-lg-3 col-md-8 offset-md-2"
                data-testid='login' 
            >

                <form 
                    className="card mt-2 bg-black bg-gradient text-light bg-opacity-75" 
                    data-testid='form-login'
                >

                    {/* ----header----- */}
                    <div className="card-header py-2 px-4">
                        <h1 className="text-start">
                            {t('logIn')}
                        </h1>
                    </div>

                        {/* ------body----- */}
                        <div className="card-body">
                            {/* ------email input------ */}
                            <Input 
                                id='email'
                                testId='email'
                                labelText={t("email")}
                                onChange={(event) => setEmail(event.target.value)}
                                help={resError}
                            />

                            {/* ------password input------ */}
                            <Input 
                                id='password'
                                testId='password'
                                labelText={t('password')}
                                type='password'
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        
                        </div>

                            {
                               
                                    resError && (
                                         <div className="container-fluid text-center" title="errorText">
                                            <div className="d-grid gap-2 my-2">
                                                <Alert type='danger' testId='alert' text={resError}/>
                                            </div>
                                        </div>
                                    )
                            }
                
                            {/* ------button------ */}
                            <div className="card-footer d-grid gap-2 my-2">
                                <Button 
                                    testId={'login-button'}
                                    disabled={isDisabled}
                                    color={'warning'}
                                    onClick={onSubmit}
                                    labelText={ t('submit')}
                                    isLoading={loading}
                                />

                            </div>     
                    </form>  
        </div>
    );
};

export default LogIn;