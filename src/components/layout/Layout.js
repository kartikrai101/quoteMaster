import { Fragment } from 'react'; //importing the Fragment component

import classes from './Layout.module.css';  // importing the css classes
import MainNavigation from './MainNavigation'; // importing the MainNavigation Component

const Layout = (props) => {
    return(
        <Fragment>
            <MainNavigation />
            {/* See that below we are the Layout component as a wrapper component in App.js component
            so that we can finally have the main component where we first have a 
            MainNavigation and then all the contents of the App component by using 
            {props.children} here */}
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
}

export default Layout;