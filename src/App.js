import React, { Suspense } from 'react';// importing Suspense component from the react library

import { Route, Switch, Redirect } from 'react-router-dom'; 

import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetails'));
const Layout = React.lazy(() => import('./components/layout/Layout'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));


function App() {
  return (  

    <Layout>
      
      {/* using the Suspense component to wrap all the Routes and rendering the Loading spinner
      as a fallback component to show while the code for a route is being downloaded */}
      <Suspense fallback={<div className='centered'> <LoadingSpinner /> </div>}>
        <Switch>
          <Route path="/" exact> 
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </Suspense>
    </Layout>
    
  );
}

export default App;
