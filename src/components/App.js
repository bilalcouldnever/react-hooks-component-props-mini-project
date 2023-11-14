// App.js

import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';

const App = () => {
  const { blogName, about, articles } = data;
return (
    <div>
      <Header blogName={blogName} />
      <About imageSrc={about.imageSrc} aboutText={about.aboutText} />
      <ArticleList articles={articles} />
      
    </div>
  );
};

export default App;
