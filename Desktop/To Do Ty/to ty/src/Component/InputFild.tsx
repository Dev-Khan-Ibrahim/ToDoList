import "./input.css"
const InputFild = () => {
    return (
      <form className="input" >
<input type="text" placeholder="Enter a task" className="input_box" />
<button className="input_submit" type="submit"  >Go</button>
      </form>
    );
};

export default InputFild;