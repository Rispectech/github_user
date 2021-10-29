import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  // console.log(repos);

  // const chartData = [
  //   {
  //     label: "HTML",
  //     value: "13",
  //   },
  //   {
  //     label: "CSS",
  //     value: "360",
  //   },
  //   {
  //     label: "Javascript",
  //     value: "480",
  //   },
  // ];

  // MOST POPULAR LANGUAGE //
  var mostlyUsedObject = repos.reduce((acc, value) => {
    const { language, stargazers_count } = value;

    if (!language) return acc;
    if (!acc[language])
      acc[language] = { label: language, value: 1, stars: stargazers_count };
    else {
      acc[language] = {
        ...acc[language],
        value: acc[language].value + 1,
        stars: acc[language].stars + stargazers_count,
      };
    }
    // console.log(acc)
    return acc;
  }, {});
  const mostlyUsed = Object.values(mostlyUsedObject)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  // console.log(mostlyUsed);

  //STARS

  const mostlyUsed_doughnut = Object.values(mostlyUsedObject)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      const { label, stars } = item;
      return { label, value: stars };
    })
    .slice(0, 5);

  // console.log(mostlyUsed_doughnut, mostlyUsed)

  //my approach - stars and forks

  // var stars = repos.reduce((acc, value) => {
  //   const { language, stargazers_count } = value
  //   if (!language) return acc
  //   console.log(language, stargazers_count)
  //   if (!acc[language])
  //     acc[language] = { label: language, value: stargazers_count }
  //   else acc[language].value += stargazers_count
  //   return acc
  // }, {})

  // console.log(stars)

  // var mostPopularObject = repos.reduce((acc, value) => {
  //   const { name, stargazers_count, forks } = value
  //   acc[name] = { label: name, value: stargazers_count, forks: forks }
  //   return acc
  // }, {})

  // const mostPopularColumn = Object.values(mostPopularObject)
  //   .sort((a, b) => b.value - a.value)
  //   .slice(0, 5)
  // // console.log(mostPopularColumn)

  // const mostPopularBar = Object.values(mostPopularObject)
  //   .sort((a, b) => b.forks - a.forks)
  //   .map((item) => {
  //     const { label, forks } = item
  //     return { label, value: forks }
  //   })
  //   .slice(0, 5)
  // console.log(mostPopularBar)

  //STARS AND FORKS - optimised approach

  let { stars, forks } = repos.reduce(
    (acc, item) => {
      const { name, stargazers_count, forks } = item;
      acc.stars[name] = { label: name, value: stargazers_count };
      acc.forks[name] = { label: name, value: forks };
      return acc;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  forks = Object.values(forks)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // console.log(stars, forks)
  // console.log(repos);

  return (
    <section className="section">
      <Wrapper className="updated-section-center">
        <Pie3D data={mostlyUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostlyUsed_doughnut} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--card-background);
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
