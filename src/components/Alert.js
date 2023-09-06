const Alert = (props) => {
    let alertClassName = `alert alert-${props.type}`;
    let testId = props.testId;
    return <div className={alertClassName} data-testid={testId}>{props.text}</div>
};

export default Alert;