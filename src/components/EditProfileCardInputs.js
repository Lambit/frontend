import Input from "./input/Input";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const EditProfileCardInputs = (props) => {
       const { t } = useTranslation();
    const { 
        nameValue, emailValue, help, disabled, isLoading, cancelEdit, saveEdit, emailChange, userChange
     } = props;

    return (
        <>
            <div className="card-body d-grid gap-2 m-4  ">
                <Input
                    id='username'
                    testId='username-edit'
                    defaultValue={nameValue}
                    labelText={t('username')}
                    onChange={userChange}
                    help={help}
                />
                <Input
                    id='email'
                    testId='email-edit'
                    defaultValue={emailValue}
                    labelText={t('email')}
                    onChange={emailChange}
                />
            </div>

            <div className="card-footer d-grid gap-4 m-4">
                <Button 
                    testId={'save-button'}
                    onClick={saveEdit}
                    labelText={'Save'}
                    color={'warning'}
                    isLoading={isLoading}
                    disabled={disabled}
                />{'  '}
                <Button 
                    testId={'cancel-button'}
                    onClick={cancelEdit}
                    labelText={'Cancel'}
                    color={'danger'}
                />
            </div>
        </>
    )
};

export default EditProfileCardInputs;