import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? <Loader /> : children}
    </>
  );
};

export default LoaderWrapper;
