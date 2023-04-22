import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='h-24 p-4 md:px-14 '>
      <div className='border-t h-full border-t-gray-600 flex justify-end items-end'>
        <p className='text-greyLight'>
          Created <b>by</b> Chris Bell &copy; {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
