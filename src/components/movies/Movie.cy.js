import React from "react";
import Movie from "./Movie";

describe("<Movie />", () => {
  it("renders", () => {
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
  });
  it("renders", () => {
    cy.fixture('movies.json').then((movies) => {
      const movie = movies[3];
  
      cy.mount(
        <Movie
          movie={movie}
        />
      );
    });
  });
});
