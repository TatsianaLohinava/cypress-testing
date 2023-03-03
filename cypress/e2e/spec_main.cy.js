import { HomePage } from "../support/pages/homePage";
import data from "../fixtures/data.json";

describe('main page tests', () => {
  const homePage = new HomePage();

  beforeEach('opens main page', () => {
    homePage.open();
  })

  it('resets the input', () => {
    homePage.getSearchInput().typeSearchQuery(data.query);
    homePage.getSearchInput().clickInputResetButton();
    homePage.getSearchInput().validateInputIsEmpty();
  })

  it('shows message on invalid login credentials', () => {
    cy.intercept('POST', data.authPath).as('login')

    homePage.clickLoginButton();
    homePage.getLoginForm().clickEmailLoginButton();
    homePage.getLoginForm().fillInForm(data.email, data.pass);
    homePage.getLoginForm().submitForm();

    let response = cy.wait('@login')
      .then(resp => cy.request('GET', resp.response.headers.location)).its('body');

    response.should('contain', data.errorMessage);
  })

  it('changes background on hover', () => {
    homePage.getSidebarMenu().hoverSidebarMenu()
  })

  it('unpins the section', () => {
    homePage.getProductContainer().unpinHeaders()
  })
})