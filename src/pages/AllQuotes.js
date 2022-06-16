import QuoteList from "../components/quotes/QuoteList"; 

import { useEffect } from 'react'; // importing the useEffect hook from react
import LoadingSpinner from '../components/UI/LoadingSpinner'; // importing the LoadingSpinner
// component from the UI folder
import NoQuotesFound from '../components/quotes/NoQuotesFound'; // importing the 
// NoQuotesFound component to use here

import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api'; 

const AllQuotes = (props) => {

    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);

    useEffect(() => { // using the useEffect hook
        sendRequest(); 
    }, [sendRequest]); // so now we will run the sendRequest function whenever this component
    // renders

    if(status === 'pending'){ // checking if the status is pending, and then rendering 
        // the loading spinner if it is pending
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if(error){ // showing the error message if there is an error 
        return <p className="centered focused"> {error} </p>
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
        // returning the NoQuotesFound component when there are no Quotes.
        return <NoQuotesFound />
    }

    return (   
        // once we have made past all the previous if checks, then we know that we can 
        // display some quotes, and then we display the loaded quotes list
        <QuoteList quotes={loadedQuotes}/>
    );
};

export default AllQuotes;