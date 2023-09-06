import Button from "./Button";
import { useTranslation } from "react-i18next";

const EditProfileCardOptions = (props) => {
    const { nameValue, editClick, deleteClick, isLoading } = props;
    const { t } = useTranslation();
  return (
    <>
        <div className="py-4 "><h1>{nameValue}</h1></div>
            
            <div className="col-12 d-grid align-self-center mb-4 ">
                <Button 
                    testId={'edit-button'}
                    onClick={editClick}
                    labelText={t('edit')}
                    color={'warning'}
                    isLoading={isLoading}
                />
            </div>

            <div className="col-12 d-grid align-self-center mt-4 ">
                <Button 
                    testId={'delete-button'}
                    onClick={deleteClick}
                    labelText={t('delete')}
                    color={'outline-danger'}
                    isLoading={isLoading}
                />
            </div>
    </>
  )
}

export default EditProfileCardOptions