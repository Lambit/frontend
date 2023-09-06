import { activate } from "../../api/api";
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../../context/Auth";
import Alert from "../../components/Alert";
import Spinner from "../../components/Spinner";


const CreateAccount = () => {
    const [result, setResult]= useState();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function activateRequest() {
            setResult();
            try{
                activate(user.token) 
                // activate(props.match.params.token) 
                    setResult('success');
            } catch (error) {
                setResult('fail');
            }
        }
        activateRequest();
    },[user.token]);


    let displayInDom = (
        <Spinner size='big' />
    );
        if (result === 'success') {
            displayInDom = <Alert testId={'success'} type='success' text='Account is activated' />
        } else if (result === 'fail') {
            displayInDom = <Alert testId={'fail'} type='danger' text='Activation failure' />
        }
    

    return (
        <div className="container text-center" data-testid='create-account'>
            <div className='row mt-4'>
                {/* <div className='col-6'>
                    <h1>Account</h1>
                </div> */}
                 <div className='col-6'>
                    {displayInDom}
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;