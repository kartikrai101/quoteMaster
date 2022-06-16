import { useRef, useState, Fragment } from 'react';
import { Prompt } from 'react-router-dom'; 

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

  const [isEntering, setIsEntering] = useState(false); 

  const authorInputRef = useRef();
  const textInputRef = useRef();


  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntering(true); 
  };

  const finishEnteringHandler = () => {  // defining the finishEnteringHandler handler
    setIsEntering(false); // setting the value of isEntering to be false
  }

  return (

    <Fragment>
      
      <Prompt 
        when={isEntering} 
        message = {(location) => "Are you sure you want to leave this page? All your information will be deleted!"} 
      />

      <Card>
        <form 
          onFocus={formFocusedHandler}  
          className={classes.form} 
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            
          {/* setting the onClick property on the submit button to point at handler function  */}
            <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>

          </div>
        </form>
      </Card>
    </Fragment>
    
  );
};

export default QuoteForm;
