import { HomePage } from "../support/components/pages/homePage";
import data from "../fixtures/data.json";

describe('main page tests', () => {
  const homePage = new HomePage();

  beforeEach('opens main page', () => {
    cy.visit('/');
  })

  it('resets the input', () => {
    homePage.getInput().typeInputQuery(data.query);
    homePage.getInput().clickInputResetButton();
    homePage.getInput().validateInputIsEmpty();
  })

  it('shows message on invalid login credentials', () => {
    cy.intercept('POST', data.authPath).as('login')

    homePage.clickLoginButton();
    homePage.getLoginForm().clickEmailLoginButton();
    homePage.getLoginForm().fillInForm(data.email, data.pass);
    homePage.getLoginForm().submitForm();

    let response = cy.wait('@login')
      .then(resp => cy.request('GET', resp.response.headers.location)).its('body');

    response.should('contain', 'Адрес электронной почты не зарегистрирован.');
  })

  it('changes background on hover', () => {
    homePage.getSidebarMenu().hoverSidebarMenu()
  })

  it('unpins the section', () => {
    homePage.getProductContainer().unpinHeaders()
  })
})