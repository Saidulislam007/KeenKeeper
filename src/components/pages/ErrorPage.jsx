import React from 'react';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-7xl font-bold text-emerald-900 mb-4">404</h1>
      <p className="text-2xl font-bold mb-2">Page Not Found </p>
      <p className="text-gray-500 mb-2">Looks like this friendship link is broken.The page <br></br> 
      you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="px-4 py-2 bg-emerald-900 text-white rounded">
        Go Home
      </a>
    </div>
    );
};

export default ErrorPage;