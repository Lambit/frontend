import React, { useContext, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import bulb from '../../assets/profile.png';
import { AuthContext } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { updateUser, deleteUser } from "../../api/api";
import EditProfileCardInputs from "../../components/EditProfileCardInputs";
import EditProfileCardOptions from "../../components/EditProfileCardOptions";
import LanguageButton from "../../components/LanguageButton";


const Profile = () => {
   const { user, handleLogout, loading, setLoading } = useContext(AuthContext);
   const navigate = useNavigate();
   const { t } = useTranslation();
   const [edit, setEdit] = useState(false);
   const [showModal, setShowModal] = useState(false);
   const [showLang, setShowLang] = useState(false);
   const [newName, setNewName] = useState(user.username);
   const [newEmail, setNewEmail] = useState(user.email);
   const [resError, setResError] = useState();


   let isDisabled = user.username === newName ? user.email === newEmail : !user.email;

   let show;



    const logOut = (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            handleLogout();
            setNewName('')
            navigate('/');  
        } catch(error) {
            setResError(error.data.message)
        }
            setLoading(false);
    };

    const updateProfile = async () => {
        setLoading(true);
        try {
            await updateUser(user.id.toString(), { username: newName });
            setEdit(false);
        } catch(error) {
            setResError(error.data.message)
        }
        setLoading(false);
    };

    const deleteProfile = async () => {
        setLoading(true);
        try {
            await deleteUser(user.id.toString());
            handleLogout();
            setNewName('');
            navigate('/');
        } catch(error) {
            setResError(error.data.message)
        }
        setLoading(false);
    };
    

    if (edit) {
        show = (
            <>
            {/* if edit selected display inputs */}
                <EditProfileCardInputs
                    nameValue={newName}
                    emailValue={newEmail}
                    help={resError}
                    isLoading={loading}
                    disabled={isDisabled} 
                    emailChange={(e) => { setNewEmail(e.target.value) }}
                    userChange={(e) => { setNewName(e.target.value) }}
                    cancelEdit={() => { setEdit(false)}}
                    saveEdit={updateProfile}
                />
            </>
        )
    } else {
        show = (
         
                <EditProfileCardOptions
                    nameValue={newName} 
                    editClick={() => { setEdit(true) }} 
                    deleteClick={() => { setShowModal(true) }}
                    isLoading={loading}
                />
        )
    }
    return (
        <div className="container-fluid text-center mt-4" data-testid='profile'>
            <div className='row mt-4 d-flex justify-content-evenly '>
                <div 
                    className='col-lg-6 col-md-8 col-sm-12 bg-black text-light bg-gradient py-4 mt-4 '
                >  
                    {/* ---------------------------
                        
                        Edit Profile Cards Landing Zone 'show'
                    
                     ----------------------------------*/}

                    {show}
                </div>
            
        <div 
            className="col-lg-4 col-md-8 col-sm-12 card bg-black bg-gradient mt-4 p-2 py-4"
        >
            {/* Profile Card with image and log out Button */}
            <div className="card-header text-center ">
                <img 
                    src={bulb} 
                    alt={t('profile')}
                    height={200}
                    width={200}
                    className='rounded-circle img-fluid'
                 />
            
                <div className="d-grid gap-2 my-4  ">
                    <Button 
                        testId={'logout-button'}
                        onClick={logOut}
                        labelText={t('logout')}
                        color={'outline-danger'}
                    />
                </div>
            </div>
        </div>

        <div className=" col-8 mt-4 d-grid py-4">
         <Button 
                          testId={'lang'}
                          labelText={t('footerTitle')}
                          color={'outline-warning'}
                          onClick={() => {setShowLang(true)}}
                          isLoading={loading}
                      />
                       {/* -----Modal----- */}
            {showLang && <LanguageButton onClick={() => { setShowLang(false)} }/>}    
            </div> 
    </div>

    
             {/* ----Delete Modal---- */}
             {showModal && (
                <Modal
                    userName={newName}
                    userEmail={newEmail}
                    onClick={deleteProfile}
                    onCancel={() => { setShowModal(false) }}
                 />
                ) }

                
    </div>
)};
export default Profile;