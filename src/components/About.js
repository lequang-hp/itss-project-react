import React from 'react';
import { withNamespaces } from 'react-i18next';


const About = ({t}) => {
  return (
    <div className='container'>
      <h5>About Us</h5>
      <p>
        {t('Text_about')}
      </p>
    </div>
  );
};

export default withNamespaces()(About);
