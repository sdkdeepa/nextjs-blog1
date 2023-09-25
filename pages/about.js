// pages/about.js
import React from 'react';
import Link from 'next/link';
const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a Next.js application.</p>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export default AboutPage;