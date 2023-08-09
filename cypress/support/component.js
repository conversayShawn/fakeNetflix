// Import css globally
import "../../src/index.css";

// Mount component
import { mount } from "cypress/react18";

Cypress.Commands.add('mount', (component, options) => {
  return mount(component, options)
})

// Uncaught exceptions error handling
Cypress.on("uncaught:exception", (err, runnable) => {
  if (err) {
    console.log(err);
  }
  return false;
});
