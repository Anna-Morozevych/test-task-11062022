import React from 'react';
import './Marquee.scss';

export const Marquee: React.FC = () => (
  <>
    <div className="Marquee Marquee--reverse">
      <div>
        <p className="Marquee__content Marquee__content--reverse">
          full-cycle event agensy full-cycle event agensy
        </p>
      </div>
    </div>

    <div className="Marquee Marquee--forward">
      <div>
        <p className="Marquee__content Marquee__content--forward">
          full-cycle event agensy full-cycle event agensy
        </p>
      </div>
    </div>
  </>

);
