import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

const Navbar = ( {t} ) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, { edge: 'right' });
  });
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  
  return (
    <Fragment>
      <nav className='z-depth-0'>
        <div className='nav-wrapper'>
          <a href='/' className='brand'>
            { t('Bookapp') }
          </a>
          <a
            href='#!'
            data-target='slide-out'
            className='right sidenav-trigger'
          >
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>{ t('Home') }</Link>
            </li>
            <li>
              <Link to='/about'>{ t('About') }</Link>
            </li>
            <li>
              <Link to='/contact'>{ t('Contact') }</Link>
            </li>
            <li>
              <button onClick={() => changeLanguage('en')}>en</button>
              <button onClick={() => changeLanguage('ja')}>ja</button>
            </li>
          </ul>
        </div>
      </nav>

      <ul id='slide-out' className='sidenav'>
        <li>
          <Link to='/' className='waves-effect sidenav-close'>
            <i className='material-icons'>home</i>Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='waves-effect sidenav-close'>
            <i className='material-icons'>business</i>About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='waves-effect sidenav-close'>
            <i className='material-icons'>mail</i>Contact
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default withNamespaces()(Navbar);
