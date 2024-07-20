import React from 'react';

import styles from './AboutUsPage.module.scss';
import AboutUs from '../HomePage/components/AboutUs';
import MailUs from '../MailUs';

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <div className="pageWrapper">
        <AboutUs />
      </div>
      <MailUs />
    </div>
  );
};

export default AboutUsPage;
