import React, { useContext, useState, useEffect } from 'react';

// USER END POINT
const api_endpoint = `http://api.github.com/users/MustafaONER?client_id=fd9c892229adf9012553&client_secret=467160132838e801d8423b21e9fa487a2ef35cc4&sort=created`;


// REPO END POINT
const repos_url = 'https://api.github.com/users/MustafaONER/repos';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);


  // FOR USER
  const fetchUser = async (url) => {
    setIsLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setUser(data);
    setIsLoading(false);
  };

  // FOR REPOS
  const fetchRepos = async (url) => {
    setIsLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setRepos(data)
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser(api_endpoint);
    fetchRepos(repos_url);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, user ,repos}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
