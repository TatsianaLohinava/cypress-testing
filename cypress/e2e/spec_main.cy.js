import { HomePage } from "../support/components/HomePage";
import data from "../fixtures/data.json";

describe('main page tests', () => {
  const homePage = new HomePage();

  beforeEach('opens main page', () => {
    cy.visit('/');
  })

  it('resets the input', () => {
    homePage.typeInputQuery(data.query);
    homePage.clickInputResetButton();

    homePage.getInput().should('have.value', '');
  })

  it('shows message on invalid login credentials', () => {
    cy.intercept('POST', data.authPath).as('login')

    homePage.clickLoginButton();
    homePage.clickEmailLoginButton();
    homePage.fillInForm(data.email, data.pass);
    homePage.submitForm();

    let response = cy.wait('@login')
      .then(resp => cy.request('GET', resp.response.headers.location)).its('body');

    response.should('contain', 'Адрес электронной почты не зарегистрирован.');
  })

  it('changes background on hover', () => {
    homePage.hoverSidebarMenu()
  })

  it('unpins the section', () => {
    homePage.unpinHeaders()
  })
})