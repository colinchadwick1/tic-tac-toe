

function Square(props) {
    const classes = props.className?`${props.className} square`:'square' 
    console.log(props.className, "props classname")
    return (  <>
    <span 
    className={`${props.state} ${classes} `}   onClick={props.onClick}>
        {props.state}
    </span>
    </>);

}

export default Square;