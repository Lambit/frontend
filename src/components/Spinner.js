const Spinner = (props) => {
    let spanClassName = 'spinner-border';
    if (props.size === 'big'){
        spanClassName += 'spinner-border-sm'
    };
    return <span className={spanClassName} role='status'></span>
};

export default Spinner;