// Import commands.js using ES2015 syntax:
import "./commands";

import { mount } from "cypress/react18";

// Cypress.Commands.add("mount", mount);

Cypress.Commands.add('mount', (component, options) => {
  // Wrap any parent components needed
  // ie: return mount(<MyProvider>{component}</MyProvider>, options)
  return mount(component, options)
})

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err) {
    console.log(err);
  }

  return false;
});
