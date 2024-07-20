import { useStaticQuery, graphql } from 'gatsby';

const useHeaderAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      logotype: file(relativePath: { eq: "rivx-lab/rivx-logo.svg" }) {
        publicURL
      }
    }
  `);

  return data;
};

export default useHeaderAssets;
