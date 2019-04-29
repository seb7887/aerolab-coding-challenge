import React from 'react';
import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />
    <meta charSet='utf-8' />
    <link rel='manifest' href='/static/manifest.json' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='application-name' content='hacknews' />
    <meta name='apple-mobile-web-app-title' content='hacknews' />
    <meta name='theme-color' content='#ff6600' />
    <meta name='msapplication-navbutton-color' content='#ff6600' />
    <meta
      name='apple-mobile-web-app-status-bar-style'
      content='black-translucent'
    />
    <meta name='msapplication-starturl' content='/' />
    <link rel='icon' sizes='512x512' href='/static/icons/icon-512x512.png' />
    <link
      rel='apple-touch-icon'
      sizes='512x512'
      href='/static/icons/icon-512x512.png'
    />
    <link rel='icon' href='/static/icons/icon-192x192.png' />
    <link rel='apple-touch-icon' href='/static/icons/icon-192x192.png' />
    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    <title>Aerolab Store</title>
  </Head>
);

export default Meta;
