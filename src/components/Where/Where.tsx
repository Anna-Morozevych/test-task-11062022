import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Where.scss';

export const Where: React.FC = () => {
  const location = useLocation();

  return (
    <Link
      className="Where App__link"
      to={{
        pathname: '/where',
        search: location.search,
      }}
    >
      where?
    </Link>
  );
};
