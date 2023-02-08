import React from 'react';

function Footer() {

const year = new Date().getFullYear();
console.log(year);

return (
  <footer className="h-24 p-4 md:px-14 ">
    <div className="border-t h-full border-t-gray-600 flex justify-between items-end">
      <p className="text-greyLight">created by Chris Bell</p>
      <p className="text-greyLight">
        all rights reserved <span>&copy;</span> {year} Chris Bell
      </p>
    </div>
  </footer>
);
}

export default Footer;
