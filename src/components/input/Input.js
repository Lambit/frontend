const Input = (props) => {

    const { id, testId, labelText, onChange, type,  help, labelRef, inputRef, defaultValue } = props;

    let inputClass = 'form-control';
    if(help) {
        inputClass += ' is-invalid'
    }

    return(
         <div className="mb-3">
            <label 
                htmlFor={id} 
                className="form-label"
              
            >
                {labelText}
            </label>
            <input 
                id={id} 
                data-testid={testId}
                className={inputClass}
                ref={inputRef}
                onChange={onChange} 
                type={type}
                defaultValue={defaultValue}
            />
            <span role={'alert'} ref={labelRef} className="invalid-feedback">{help}</span>
        </div>

    );
};

export default Input;