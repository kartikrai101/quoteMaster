import { NavLink } from 'react-router-dom'; // importing the NavLink component

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>

      {/* Using the dynamic path for the button so that we can jump to that specific quote
      detail page  */}

      <NavLink to={`/quotes/${props.id}`} className='btn'>
        View Fullscreen
      </NavLink>
    </li>
  );
};

export default QuoteItem;
