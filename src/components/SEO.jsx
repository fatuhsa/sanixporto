/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title || "Sani's Portfolio"}</title>
      <meta name="description" content={description || "Personal portfolio of Fatuh Sani Ansori, a Web Developer student."} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
