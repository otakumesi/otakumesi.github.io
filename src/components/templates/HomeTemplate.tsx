import * as React from 'react';

import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import Main from '../organisms/Main';

const HomeTemplate: React.SFC = () =>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>

export default HomeTemplate;
