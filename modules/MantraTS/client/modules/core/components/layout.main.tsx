import React from 'react';
import Navigations from './navigations';

const Layout = ({content = (): void => null }) => (
  <div>
    <header>
    <h1>Mantra Voice</h1>
    <Navigations />
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</small>
    </footer>
  </div>
);

export default Layout;
