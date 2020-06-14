import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List'
import withListLoading from './components/withListLoading';
import axios from 'axios'

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  })

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);


  function checkApi() {
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=7544b6e2&s=superman';
    axios.get(url).then(result => console.log(result))
  }

  checkApi()


  return (
    <div className="App">
      <div className="container">
        <h1>My Reposotories</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className="footer">
          Built{''}
          <span role="img" aria-label='love'>
            💚
          </span>{''}
          with by Pablo Hernandez
        </div>
      </footer>
    </div>
  );
}

export default App;
