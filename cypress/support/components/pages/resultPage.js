import data from "../../../fixtures/data.json";
const ResultItem = require("../elements/resultItem");
const filterOption = new RegExp(data.filterOption);

export class ResultPage {

    constructor() {
        this.filterButton = `[class='fm-element-panel filters__chkslist__li']`;
        this.resultItem = new ResultItem();
    }

    clickFilterButton() {
        cy.contains(this.filterButton, filterOption).click();
    }

    getResultItem() {
        return this.resultItem;
    }
}