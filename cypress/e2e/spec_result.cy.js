import { HomePage } from "../support/pages/HomePage"
import { ResultPage } from "../support/pages/ResultPage";
import data from "../fixtures/data.json"

describe('result page tests', () => {
  const homePage = new HomePage();
  const resultPage = new ResultPage();

  beforeEach('opens main page and submits query', () => {
    homePage.open();
    homePage.getSearchInput().typeSearchQuery(data.query);
    homePage.getSearchInput().clickSearchButton();
  });

  it('checks and prints out query results', () => {
    resultPage.getResultItem().printResultsList();
  })

  it('filters the results', () => {
    resultPage.clickFilterButton();
    resultPage.getResultItem().validateFilterResult();
  })
})