import React from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
    return (<div className={styles.container}>
        <h2 className={styles.title} >About Us</h2>
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h3 className={styles.subtitle}>
                    Our Mision
                </h3>
                <p className={styles.description}>At RIVX, our mission is to drive the adoption and integration of Web3 technologies. We are passionate about decentralization and its potential to create a more transparent, secure, and efficient digital world.</p>
            </div>
            <div style={{display: 'flex'}}>
                <div className={styles.line} />
                <div className={styles.info}>
                    <h3 className={styles.subtitle}>
                        Our Mision
                    </h3>
                    <p className={styles.description}>We envision a future where decentralized technologies empower individuals and businesses to operate with greater autonomy and trust. Our goal is to be at the forefront of this revolution, delivering innovative solutions that transform industries and drive positive change.</p>
                </div>
                <div className={styles.line} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.subtitle}>
                    Our Team
                </h3>
                <p className={styles.description}>Our team comprises blockchain developers, crypto experts, and digital strategists who are passionate about Web3. With a wealth of experience and a commitment to excellence, we work collaboratively to deliver solutions that exceed our clients' expectations.</p>
            </div>
        </div>
    </div>);
};

export default AboutUs