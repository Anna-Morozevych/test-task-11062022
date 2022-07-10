import React from 'react';
import './EllipseButton.scss';
import button from '../../images/buttons.svg';

export const EllipseButton: React.FC = () => (
  <div className="Ellipse">
    <img src={button} alt="button"></img>
  </div>
);
