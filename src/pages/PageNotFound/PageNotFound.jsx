import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='w-full flex flex-col items-center justify-center min-h-screen bg-white'>
      <h1 className='text-3xl md:text-6xl font-bold text-orange text-center mt-10'>
        404 - Page Not Found
      </h1>
      <p className='text-lg md:text-2xl text-gray-600 text-center mt-4'>
        Oops! The page you are looking for does not exist.
      </p>
      <p className='text-md md:text-lg text-gray-500 text-center mt-2'>
        It might have been moved or deleted.
      </p>
      <img className='w-2/3 md:w-1/3 h-auto ' src="/pageNotFound/pnf.gif" alt="Page not found" />
      <Link to="/" >
        <button className='bg-orange text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#EA580C] transition-all duration-300'>
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
