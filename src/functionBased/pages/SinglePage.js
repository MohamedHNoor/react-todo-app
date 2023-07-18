import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const aboutData = [
    {
      slug: 'about-app',
      title: 'About the App',
      description:
        'In this app, you can add, delete, submit, and edit items. To edit items, double-click on them. Once you are done, press the enter key to resubmit. This app will persist your data in the browser's local storage. So whether you reload, close your app, or reopen it, you still have access to your to-dos items.',
    },
    {
      slug: 'about-author',
      title: 'About the Author',
      description:
        'Mohamed Hassan Noor, a Full-stack web developer, developed this app. I am open to collaborating on projects or freelance Gigs. Connect with me on LinkedIn: https://www.linkedin.com/in/mohamedhnoor/.',
    },
  ];
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
