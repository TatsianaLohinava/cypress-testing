import { HomePage } from "../support/components/HomePage"
import { ResultPage } from "../support/components/ResultPage";
import data from "../fixtures/data.json"

describe('result page tests', () => {
  const homePage = new HomePage();
  const resultPage = new ResultPage();

  beforeEach('opens main page and submits query', () => {
    cy.visit('/');
    homePage.typeInputQuery(data.query);
    homePage.clickSearchButton();
  });

  it('checks and prints out query results', () => {
    resultPage.printResultsList();
  })

  it('filters the results', () => {
    resultPage.clickFilterButton();
    resultPage.validateFilterResult();
  })
})