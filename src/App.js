import React from 'react';
import { useHistory } from 'react-router';
import './App.css';
import ContactUs from './view/common/components/ContactUs/ContactUs';
import PageFooter from './view/common/components/PageFooter/PageFooter';
import PageHeader from './view/common/components/PageHeader/PageHeader';
import { HIDE_FOOTER } from './view/route/PageRoutesConstant';
import Routes from './view/route/Routes';
import * as R from "ramda";

function App(props) {
  const history = useHistory();
  const hideFooter = R.includes(history.location.pathname, HIDE_FOOTER);
  return (
    <div className="App">
      <PageHeader />
      <Routes />
      <ContactUs />
      <PageFooter />
      {
        // !hideFooter && (
        <>

        </>
        // )
      }

    </div>
  );
}

export default App;
