import { Fragment } from 'react';
import { useHistory, useLocation, useRouteMatch  } from 'react-router-dom';// importing the
// useRouteMatch hook 

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => { 
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};


const QuoteList = (props) => {

  const match = useRouteMatch(); // defining the match object from useRouteMatch hook
  const history = useHistory();
  const location = useLocation(); 

  const queryParams =  new URLSearchParams(location.search); 

  const isSortingAscending = queryParams.get('sort') === 'asc'; 

  const isSortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => { 
    // another way of pushing the path inside the history object so that the url becomes
    // the one that we just pushed
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });

    //history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);

  };

  return (
    <Fragment>

      <div className={classes.sorting}>

        <button onClick={changeSortingHandler}>
          Sort { isSortingAscending ? 'Descending' : 'Ascending'} 
        </button>

      </div>

      <ul className={classes.list}>
        
        {isSortedQuotes.map((quote) => ( 
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
