import Spinner from "./Spinner";

const Button = (props) => {

    const { id, testId, labelText, onClick, disabled, color, isLoading } = props;
    
    return (
        <button 
            id={id}
            data-testid={testId}
            type='button'
            title="button"
            className={`btn btn-${color} p-4 btn-lg`}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            { isLoading && <Spinner /> }
            {labelText}
        </button>
)};
export default Button;