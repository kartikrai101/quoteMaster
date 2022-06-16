import { useParams, Route, NavLink, useRouteMatch } from 'react-router-dom';
import { Fragment } from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments'; 

import { useEffect } from 'react'; // importing the useEffect hook for side effect
import useHttp from '../hooks/use-http'; // importing the useHttp custom hook
import { getSingleQuote } from '../lib/api'; //importing the getSingleQuote function 
import LoadingSpinner from '../components/UI/LoadingSpinner'; // importing the Loading
// spinner from the UI folder

const QuoteDetail = (props) => {

    const match = useRouteMatch();  
    const params = useParams();

    const { quoteId } = params;// destructuring the value of quoteId from params so that
    // we can use this quoteId as an argument in sendRequest function in useEffect hook 

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
    // using the useHttp custom hook to send a request to the server to get a single quote

    useEffect(() => { // using the useEffect hook to send a request whenever this component
        // is rendered
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if(status === 'pending'){ // checking if the status is pending, then we return the 
        // loading spinner 
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if(error){ // returning the error if the status that we receive is error
        return(
            <p className='centered'>{error}</p>
        );
    }

    if(!loadedQuote){ // giving the output as 'No Quote Found' if we don't get any quote
        return <p className="centered"> No Quote Found </p>;
    }

    return (
        <Fragment>
            <HighlightedQuote 
                text = {loadedQuote.text}
                author = {loadedQuote.author}
            />

            <Route path={match.path} exact>
                <div className='centered'>
                    <NavLink className='btn--flat' to={`${match.url}/comments`}>
                        <p>Comment Section</p>
                    </NavLink>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>    
        </Fragment>
        
    );
};

export default QuoteDetail;