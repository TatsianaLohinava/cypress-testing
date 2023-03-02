import data from "../../fixtures/data.json";
const filterOption = new RegExp(data.filterOption);

class ResultItem {
    constructor() {
        this.resultItem = '.item-type-card';
        this.resultItemTitle = '.item-type-card__title';
        this.resultProductLabel = '.product-labels';
    }

    validateFilterResult() {
        cy.get(this.resultItem).each(item => {
            const itemLabel = item.find(this.resultProductLabel).text();
            expect(itemLabel).to.match(filterOption)
        });
    }

    printResultsList() {
        cy.get(this.resultItem)
            .should('exist')
            .each(item => {
                console.log(item.find(this.resultItemTitle).text())
            });
    }
}

module.exports = ResultItem;