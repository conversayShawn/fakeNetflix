import React from "react";
import Movie from "./Movie";

describe("<Movie />", () => {
  it("renders with data provided in test", () => {
    // Mount movie component and provide fake data
    cy.mount(
      <Movie
        movie={{
          id: 19,
          title: "Lion King",
          poster: "/images/lion_king.png",
          description:
            "In the vast savannahs of Africa, a young lion cub named Simba must reclaim his throne as the rightful king after facing exile due to his wicked uncle's schemes. With the help of newfound friends, Simba learns about responsibility and embraces his destiny in the Circle of Life.",
        }}
      />
      ).contains
      // Verify it has all the necessary parts of component
      // Verify it has alt text
      // Verify it does not have seasons
  });
  it("renders from fixture file", () => {
    cy.fixture('movies.json').then((movies) => {
      // Verify index returns expected data
      const movie = movies[3];
  
      cy.mount(
        <Movie
          movie={movie}
        />
      );
    });
  });
  it('renders from fetched data', () => {
    // Provide some generic API endpoint
    cy.mount(<Movie />)
  })
});
