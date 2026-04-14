import React from 'react';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg mb-4">Page Not Found 😢</p>
      <a href="/" className="px-4 py-2 bg-teal-600 text-white rounded">
        Go Home
      </a>
    </div>
    );
};

export default ErrorPage;