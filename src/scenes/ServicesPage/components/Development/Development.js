import React from 'react';

import { useServicesDevelopmentAssets } from '@hooks/queries';
import ServicesItem from '../ServicesItem';

import styles from './Development.module.scss';

const Development = () => {
  const {
    hybridAppsDevelopment,
    projectManagement,
    qualityAssurance,
    webDevelopment,
  } = useServicesDevelopmentAssets();

  const message = {
    text: 'We provide the best service for our clients.',
    link: 'NEED A DEVELOPER?',
  };

  const items = [
    {
      title: 'Web Development',
      text: 'Build robust, scalable, and user-friendly websites with our web development services. We create custom solutions tailored to your business needs, ensuring a seamless user experience.',
      image: webDevelopment,
    },
    {
      title: 'Smart Contract Development',
      text:
        'Harness the power of blockchain with our custom smart contract services. we create smart contracts on multiple blockchain , we deliver secure, scalable, and robust solutions tailored to your needs.',
      image: hybridAppsDevelopment,
    },
    {
      title: 'Crypto Solutions',
      text:
        'Navigate the complex world of cryptocurrencies with our expert guidance. We offer comprehensive services, including token development, wallet integration, and crypto payment solutions to enhance your digital strategy.',
      image: projectManagement,
    },
    {
      title: 'NFT Solutions',
      text:
        'Enter the booming NFT market with confidence. Our team provides end-to-end NFT solutions, from concept creation, design and smart contract development to marketplace deployment and marketing strategies.',
      image: qualityAssurance,
    },
    {
      title: 'Web3 Consulting',
      text: 'Stay ahead of the curve with our Web3 consulting services. Our experts offer strategic insights, technical guidance, and market analysis to help you make informed decisions in the fast-evolving Web3 landscape.',
      image: qualityAssurance,
    },
  {
      title: 'Digital Marketing',
      text: 'Boost your online presence with our comprehensive digital marketing services. We provide SEO, PPC, social media marketing, and content marketing strategies that drive traffic, increase engagement, and generate leads.',
      image: qualityAssurance,
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Service</h2>
      <ServicesItem items={items} message={message} />
    </div>
  );
};

export default Development;
