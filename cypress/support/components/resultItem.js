import data from "../../fixtures/data.json";
const filterOption = new RegExp(data.filterOption);

class ResultItem {
    constructor() {
        this.resultItem = '.item-type-card';
        this.resultItemTitle = '.item-type-card__title';
        this.resultProductLabel = '.product-labels';
        this.resultPriceLabel = '.item-type-card__btn';
    }

    validateFilterResult() {
        cy.get(this.resultItem).each(item => {
            const itemLabel = item.find(this.resultProductLabel).text();
            expect(itemLabel).to.match(filterOption)
        });
    }

    validatePriceRange(min, max) {
        cy.get(this.resultItem).each(item => {
            let itemLabel = item.find(this.resultPriceLabel).text().replace(',', '.');
            itemLabel = parseFloat(itemLabel);
            expect(itemLabel).to.be.gte(min).and.lte(max);
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