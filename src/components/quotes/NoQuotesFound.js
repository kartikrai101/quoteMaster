import classes from './NoQuotesFound.module.css';
import { NavLink } from 'react-router-dom'; // importing the NavLink component 


const NoQuotesFound = () => { 
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>

      {/* using the NavLink component to create a link/button that directs to /new-quote path */}
      <NavLink to="/new-quote" className='btn'>
        Add a Quote
      </NavLink>
    </div>
  );
};

export default NoQuotesFound;
