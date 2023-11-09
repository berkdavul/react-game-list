import classes from "./InputComp.module.css";

const InputComp = (props) => {
  const handleChange = (e) => {
    if (props.error) props.setError && props.setError("");
    props.onChange && props.onChange(e);
  };

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${classes.input}  ${props.class ? classes[props.class] : ''} ${props.error ? classes.error : ''}`}
        onChange={handleChange}
        accept={props.accept}
      >
      </input>
      {props.error ? <div className={classes.errText}>{props.error}</div> : ""}
    </>
  );
};
export default InputComp;
