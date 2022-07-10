import React from 'react';
import { Link } from 'react-router-dom';
import './Routes.scss';

export const WhoPage: React.FC = () => (
  <div className="Routes">
    <h1>
      Who?
    </h1>
    <Link className="Routes__link" to="/">
      Back
    </Link>
  </div>
);
