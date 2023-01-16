import React from 'react';
import { Link } from 'react-router-dom';

const NotMatch = () => (
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '4rem',
      }}
    >
      Error... Wrong URL, make sure you follow the right URL
    </div>
    <Link
      to="/"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '4rem',
      }}
    >
      Back Home
    </Link>
  </>
);

export default NotMatch;
