import React from 'react';

import styles from './Footer.module.scss';
import Twitter from '../../assets/images/brands/twitter.inline.svg';
import Instagram from '../../assets/images/brands/instagram.inline.svg';
import Youtube from '../../assets/images/brands/youtube.inline.svg';
import Tiktok from '../../assets/images/brands/tiktok.inline.svg';
import Thread from '../../assets/images/brands/thread.inline.svg';

const Footer = () => {
  return (
    <div className={`oldPageWrapper ${styles.container}`}>
      <div className={styles.logotype}>
        With Love from <b>RIVX Lab</b>
      </div>
      <ul className={styles.socials}>
        <li>
          <a
            href="https://x.com/rivxlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/rivxlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.threads.net/@rivxlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thread
            <Thread />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@rivxmedia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
            <Youtube />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@rivxmedia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiktok
            <Tiktok />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
