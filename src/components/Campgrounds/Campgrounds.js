import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from '../../axios-order';
import Body from './Body/Body';
import App from '../../App';

const Campgrounds = props => {
  const [campground, setCampground] = useState(null);

  useEffect(() => {
    axios
      .get('/campgrounds')
      .then(response => {
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props]);

  const tabRow = () => {
    return (
      campground &&
      campground.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  const logout = () => {
    localStorage.setItem('token', '');
    localStorage.clear();
    // setRedirect(true);
    Router.push('/');
  };

  return (
    <>
      <App />
      <div className="container">
        <header className="jumbotron">
          <div className="container">
            <h1>
              <span className="glyphicon glyphicon-tent"></span>Welcome To
              YelpCamp
            </h1>
            <p>View our hand picked campgrounds from all over the world</p>
            <p>
              <Link href="/campgrounds/new">
                <a className="btn btn-primary btn-lg">Add New Campground</a>
              </Link>
            </p>
          </div>
        </header>

        <div
          className="row text-center"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {tabRow()}
        </div>
      </div>
    </>
  );
};

export default Campgrounds;
