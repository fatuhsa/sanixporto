import React from 'react';
import { Helmet } from 'react-helmet-async';

const Header = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@2.50.1/dist/full.css"
        rel="stylesheet"
      />
      <title>Fatuh's Portfolio</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@100&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .roboto-thin {
          font-family: "Roboto", sans-serif;
          font-weight: 100;
          font-style: normal;
          letter-spacing: 2px;
        }
        .press-start-2p-regular {
          font-family: "Press Start 2P", system-ui;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
    </Helmet>
  );
}

export default Header;