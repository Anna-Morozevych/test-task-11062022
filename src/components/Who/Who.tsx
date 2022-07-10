import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Who.scss';

export const Who: React.FC = () => {
  const location = useLocation();

  return (
    <Link
      className="Who App__link"
      to={{
        pathname: '/who',
        search: location.search,
      }}
    >
      who?
    </Link>
  );
};
