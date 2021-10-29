import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [gitHubUser, setGitHubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [gitHubFollowers, setGitHubFollowers] = useState(mockFollowers);

  //request and loading
  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: "" });

  //no of requests
  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(
        ({
          data: {
            rate: { remaining: rem },
          },
        }) => {
          setRequest(rem);
          console.log(rem);
          if (rem === 0) {
            setError({
              show: true,
              msg: "Sorry u have excessed your hourly limit rate ",
            });
          }
        }
      )
      .catch((err) => console.error(err));
  };

  const searchGithubUser = async (user) => {
    setLoading(true);
    setError({ show: false, msg: "" });
    setLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGitHubUser(response.data);
      console.log(response);
      const { login, followers_url } = response.data;
      //repos
      // await axios(`${rootUrl}/users/${login}/repos?per_page = 100`)
      //   .then((item) => setRepos(item.data))
      //   .catch((err) => console.log(err))
      // //followers
      // await axios(`${followers_url}?per_page=100`)
      //   .then((item) => setGitHubFollowers(item.data))
      //   .catch((err) => console.log(err))
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((result) => {
        console.log(result);
        const [repos, followers] = result;
        // console.log(repos.value.data, followers.value.data);

        if (repos.status === "fulfilled") setRepos(repos.value.data);
        if (followers.status === "fulfilled")
          setGitHubFollowers(followers.value.data);
      });
    } else {
      setError({
        show: true,
        msg: "Any User with this Github Id doesn't exist",
      });
    }
    // console.log(request);
    // checkRequest()
    console.log(repos);
    setLoading(false);
  };

  useEffect(checkRequest, [GithubContext]);
  return (
    <GithubContext.Provider
      value={{
        gitHubUser,
        gitHubFollowers,
        repos,
        request,
        error,
        loading,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
