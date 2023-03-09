import React from 'react'
import CharacterGallery from './components/CharacterGallery'
import './App.css'

const App = () => {
  return (
    <div data-test='app-container'>
      <h1 className="site-title" data-test='site-title'>A Song of Fire and Ice</h1>
      <CharacterGallery />
    </div>
  );
};

export default App;

//CI: continuous Integration ==> new version is build immediately
//CD: continuous Deployment ==> new version is updated

//Jenkins Pipeline: Commit, build, test, staging, deploying.
//YAML: configures files where data is stored or transmitted.