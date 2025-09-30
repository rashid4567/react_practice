import useToggle from "./useToggle"

const Button = () =>{
    const [isvisible, toggleVisiblity] = useToggle();

    return(
        <div>
            <h4>custom hooks - useToggle</h4>
            <button onClick={toggleVisiblity}>{isvisible  ? "Hide Text" : "show text"}</button>
            {isvisible && <p>Hello this text is visible </p>}
        </div>
    )
}

export default Button;