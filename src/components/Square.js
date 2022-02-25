

function Square(props) {
    const classes = props.className?`${props.className} square`:'square' 
    return (  <>
    <span 
    className={`${props.state} ${classes} `}   onClick={props.onClick}>
        {props.state}
    </span>
    </>);

}

export default Square;