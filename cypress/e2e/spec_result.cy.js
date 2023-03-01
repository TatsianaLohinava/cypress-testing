import { HomePage } from "../support/components/pages/HomePage"
import { ResultPage } from "../support/components/pages/ResultPage";
import data from "../fixtures/data.json"

describe('result page tests', () => {
  const homePage = new HomePage();
  const resultPage = new ResultPage();

  beforeEach('opens main page and submits query', () => {
    cy.visit('/');
    homePage.getInput().typeInputQuery(data.query);
    homePage.getInput().clickSearchButton();
  });

  it('checks and prints out query results', () => {
    resultPage.getResultItem().printResultsList();
  })

  it('filters the results', () => {
    resultPage.clickFilterButton();
    resultPage.getResultItem().validateFilterResult();
  })
})