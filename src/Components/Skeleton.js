import React from 'react';
import '../App.css';

const Skeleton = () => {
  return (
    <div className="skeleton">
        <div className="skeleton-image"></div>
        <div className='skeleton-profile'>
            <div className="skeleton-profile-image"></div>
            <div className="skeleton-profile-name"></div>
        </div>
    </div>
  );
};

export default Skeleton;
