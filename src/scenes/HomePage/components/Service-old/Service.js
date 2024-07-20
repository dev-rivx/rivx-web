
import React from 'react';

import styles from './Service.module.scss';
import Item from './components';

const services = [
    {
        title: 'Web Development',
        description: 'Build robust, scalable, and user-friendly websites with our web development services. We create custom solutions tailored to your business needs, ensuring a seamless user experience.',
    },
    {
        title: 'Smart Contract Development',
        description: 'Harness the power of blockchain with our custom smart contract services. we create smart contracts on multiple blockchain , we deliver secure, scalable, and robust solutions tailored to your needs.',
    },
    {
        title: 'Crypto Solutions',
        description: 'Navigate the complex world of cryptocurrencies with our expert guidance. We offer comprehensive services, including token development, wallet integration, and crypto payment solutions to enhance your digital strategy.',
    },
    {
        title: 'NFT Solutions',
        description: 'Enter the booming NFT market with confidence. Our team provides end-to-end NFT solutions, from concept creation, design and smart contract development to marketplace deployment and marketing strategies.',
    },
    {
        title: 'Web3 Consulting',
        description: 'Stay ahead of the curve with our Web3 consulting services. Our experts offer strategic insights, technical guidance, and market analysis to help you make informed decisions in the fast-evolving Web3 landscape.',
    },
    {
        title: 'Digital Marketing',
        description: 'Boost your online presence with our comprehensive digital marketing services. We provide SEO, PPC, social media marketing, and content marketing strategies that drive traffic, increase engagement, and generate leads.',
    }
]

const Service = () => {
    return (<div className={styles.container}>
        <h2 className={styles.title} >Service</h2>
        <p className={styles.description} >We provide the best service for our clients.</p>
        <hr />
        <div className={styles.wrapper} >
            {
                services.map(({ title, description }) => {
                    return <Item key={title} title={title} description={description} />
                })
            }
        </div>
    </div>)
};

export default Service;