import React from 'react';
import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />
    <meta charSet='utf-8' />
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
