import './newpost.css';
import { useState } from 'react';


function NewPost(props) {
  const [currentValue, setCurrentValue] = useState("Some Text");
  const [currentAuthor, setCurrentAuthor] = useState("Ayush");

  function changeBodyHandler(e) {
    setCurrentValue(e.target.value);
  }
  function changeAuthorHandler(e) {
    setCurrentAuthor(e.target.value);
  }
  function submitHandler(e){
    e.preventDefault()
    const postData = {
      body: currentValue,
      author: currentAuthor
    }
    props.onAdd(postData)
    props.onCancel()
  }
 
  return (
    <form className="form" onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p></p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler}/>
      </p>
      <p className="actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;