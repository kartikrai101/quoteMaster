import QuoteForm from '../components/quotes/QuoteForm';  
import { addQuote } from '../lib/api'; // importing the addQuote function from api.js file
import useHttp from '../hooks/use-http'; // importing the use-http custom hook
import {useEffect} from 'react'; // we need to import the useEffect hook so that we can 
// run the side effects only when a given dependency changes 

import { useHistory } from 'react-router-dom';

const NewQuote = (props) => {

    const {sendRequest, status} = useHttp(addQuote); // extracting the sendRequest function
    // and the status object from the object that is returned by useHttp custom hook

    const history = useHistory();

    useEffect(() => { // defining the useEffect hook here
        if(status === 'completed'){
            history.push('/quotes'); // redirecting the user to '/quotes' once the status
            // becomes 'completed'. You can see when the status becomes 'completed' in
            // use-http.js file
        }
    }, [status, history]); // remember to put all the variables that you are using in the 
    // callback function of useEffect as dependencies in the array

    const addQuoteHandler = (quoteData) => { 
        sendRequest(quoteData); // passing the quoteData object into our sendRequest function
        // that is defined inside the use-https custom hook
    };

    return(
        // adding the isLoading prop to the QuoteForm component because there in the
        // QuoteForm component we are rendering a loading spinner based on whether isLoading
        // is true or false.
        <QuoteForm isLoading= {status === 'pending'} onAddQuote={addQuoteHandler}/>
    );
};

export default NewQuote;