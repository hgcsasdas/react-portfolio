import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4 text-center flex justify-between">
      <div className="text-left">
        <p>Email: <a href="mailto:hgc.csn@gmail.com">hgc.csn@gmail.com</a>  or <a href="mailto:carl.san.nu@gmail.com">carl.san.nu@gmail.com</a> </p>
      </div>
      <div className="text-ellipsis">
        <p>Phone: 🇪🇸 +34 643 545 314</p>
      </div>
    </footer>
  );
};

export default Footer;
