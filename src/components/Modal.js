import Button from "./Button";

const Modal = (props) => {
    const { userName, userEmail, onClick, onCancel } = props;
    return (
        <div className="bg-black bg-opacity-50 d-block modal show" tabIndex="-1">
            <div className="modal-dialog bg-dark rounded">
                <div className="modal-content">
                    {/* -----header----- */}
                    <div className="modal-header bg-dark bg-gradient text-light  ">
                        <h1 className="modal-title fs-5" >Delete Account</h1>
                    </div>
                    {/* -----body ------ */}
                        <div className="modal-body bg-dark bg-gradient">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="text-light fw-bold">Username: {userName}</p>  
                                    </div>
                                    <div className="col-md-6 ms-auto">
                                        <p className="text-light fw-bold">Email: {userEmail}</p>
                                    </div>
                                </div>
                            <div className="row ">
                                <div className="col-12 text-center">
                                    <p className="text-light">Are you sure you want to proceed. This action cannot be undone.</p>
                                </div>   
                            </div>

                            {/* -----buttons----- */}
                            <div className="row py-2 mt-2">
                                <div className=" col gap-3 d-flex flex-row-reverse">
                                    <Button
                                        testId={'close-button'}
                                        labelText={'Cancel'}
                                        color={'warning'}
                                        onClick={onCancel}
                                    />
                                    <Button 
                                        testId={'delete-button'}
                                        onClick={onClick}
                                        labelText={'Delete'}
                                        color={'danger'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;