import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import '../index.css';


const SectionWrapper = ({ children, className = '' }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`section-fade ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
