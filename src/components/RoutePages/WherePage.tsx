import React from 'react';
import { Link } from 'react-router-dom';
import './Routes.scss';

export const WherePage: React.FC = () => (
  <div className="Routes">
    <h1>
      Where?
    </h1>
    <Link className="Routes__link" to="/">
      Back
    </Link>
  </div>
);
