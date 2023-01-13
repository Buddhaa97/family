import React from 'react';
import { PageProps } from '../../models/page.models';
import logo from '../../assets/logo.svg';
import '../../stylesheet/HomeStyles.scss';

const Home = ({ pageTitle }: PageProps) => {

  return (
      <>
          <div className="app">
              <h2>Home</h2>
              <div className="appBody">
                  <img src={logo} className="App-logo" />
              </div>
          </div>
      </>
  )
}
export default Home;
