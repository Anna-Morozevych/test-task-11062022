import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './What.scss';

export const What: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Link
        className="What App__link"
        to={{
          pathname: '/what',
          search: location.search,
        }}
      >
        what?
      </Link>
    </>
  );
};
