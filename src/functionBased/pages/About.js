import React from 'react';
import { Link, useResolvedPath, Route } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
  const { url } = useResolvedPath('').pathname;
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path=":slug" element={<SinglePage />} />
    </div>
  );
};
export default About;
