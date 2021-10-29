import React from "react";
import {
  Repos,
  Search,
  Navbar,
  UserSection,
  UserRepoSection,
  Loading,
} from "../components";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  let { loading } = React.useContext(GithubContext);

  return (
    <main>
      <Navbar />
      <Search />
      {loading ? (
        <Loading />
      ) : (
        <>
          <UserSection />
          <Repos />
          <UserRepoSection />
        </>
      )}
    </main>
  );
};

export default Dashboard;
