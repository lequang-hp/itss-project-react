import React from 'react';
import { withNamespaces } from 'react-i18next';

const Contact = ({t}) => {
  return (
    <div className='container'>
      <h5>Contact Us</h5>
      <h6>K62 HEDSPI</h6>
      <p>
        <li>{t('Name_1')}</li>
        <li>{t('Name_2')}</li>
        <li>{t('Name_3')}</li>
        <li>{t('Name_4')}</li>
        <li>{t('Name_5')}</li>
      </p>
      <div className='divider' />
      <h6>{t('Address')}</h6>
    </div>
  );
};

export default withNamespaces()(Contact);
