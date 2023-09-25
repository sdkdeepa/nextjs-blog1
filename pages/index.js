// pages/index.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/about">About Page</Link>
      <br/>
      <Link href="/contact">Go to Contact</Link>
      <br/>
      <Link href="/posts">Go to Posts</Link>
    </div>
  );
};

export default HomePage;