import React from "react";
import Movie from "./Movie";

describe("<Movie />", () => {
  it("is a movie component, not a cartoon tv series", () => {
    // Mount movie component and provide fake data
    cy.mount(
      <Movie
        movie={{
          id: 23,
          title: "Lion King",
          poster: "/images/lion_king.png",
          description:
            "In the vast savannahs of Africa, a young lion cub named Simba must reclaim his throne as the rightful king after facing exile due to his wicked uncle's schemes. With the help of newfound friends, Simba learns about responsibility and embraces his destiny in the Circle of Life.",
        }}
      />
    );

    // Verify it has all the necessary parts of component
    cy.get("img").should("exist"); // Should have image
    cy.get("h3").should("exist"); // Should have title
    cy.get("p").should("exist"); // Should have description

    // Verify it does not have seasons
    cy.get("h2").should("not.exist"); // Should not have season
  });

  it.only("has alt text", () => {
    // Mount movie component and provide fake data
    cy.mount(
      <Movie
        movie={{
          id: 42,
          title: "Lion King",
          img: "",
          alt: "Simba, Nala, Rafiki, Timon, and Pumbaa stand on Pride Rock overlooking the Pride Lands",
          description:
            "In the vast savannahs of Africa, a young lion cub named Simba must reclaim his throne as the rightful king after facing exile due to his wicked uncle's schemes. With the help of newfound friends, Simba learns about responsibility and embraces his destiny in the Circle of Life.",
        }}
      />
    );
    // Verify it has alt text & is descriptive
    cy.get("img")
    .should("have.attr", "alt")
    .and("not.be.empty")
    .and(
      "eq",
      "Simba, Nala, Rafiki, Timon, and Pumbaa stand on Pride Rock overlooking the Pride Lands"
    ); // Verify 'alt' attribute is not empty and has the expected value
  });

  // it("renders from fixture file", () => {
  //   cy.fixture("movies.json").then((movies) => {
  //     // Verify index returns expected data
  //     const movie = movies[3];

  //     cy.mount(<Movie movie={movie} />);
  //   });
  // });
  // it("renders from fetched data", () => {
  //   // Provide some generic API endpoint
  //   cy.mount(<Movie />);
  // });
});
