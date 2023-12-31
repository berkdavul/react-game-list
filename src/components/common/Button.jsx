import classes from "./Button.module.css"

const Button = (props) => {

    return (
        <button onClick={props.onClick} className={`${classes.button} ${props.class ? classes[props.class] : ''}`} type={props.type}>
            {props.text}
        </button>
    )
}
export default Button