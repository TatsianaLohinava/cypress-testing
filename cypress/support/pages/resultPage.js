const ResultItem = require("../components/resultItem");
const FilterMenu = require("../components/filterMenu");

export class ResultPage {

    constructor() {
        this.filterMenu = new FilterMenu();
        this.resultItem = new ResultItem();
    }

    getFilterMenu() {
        return this.filterMenu;
    }

    getResultItem() {
        return this.resultItem;
    }
}