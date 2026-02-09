import React from 'react';
import { Navigate, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center mt-50 mb-auto">
      <h3 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        An Error Occured
      </h3>
      <p className="my-2  p-2 font-bold">{error.message}</p>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4 block"
        onClick={() => navigate('/')}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Error;
