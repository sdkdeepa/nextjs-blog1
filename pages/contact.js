// pages/contact.js
import Link from 'next/link';
import React from 'react';
const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>You can reach us at contact@example.com</p>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export default ContactPage;