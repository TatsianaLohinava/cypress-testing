import data from "../../fixtures/data.json"

const filterOption = new RegExp(data.filterOption);

export class ResultPage {

    constructor() {
        this.resultItem = '.item-type-card';
        this.filterButton = `[class='fm-element-panel filters__chkslist__li']`;
        this.resultItemTitle = '.item-type-card__title';
        this.resultProductLabel = '.product-labels';
    }

    clickFilterButton() {
        cy.contains(this.filterButton, filterOption).click();
    }

    validateFilterResult() {
        cy.get(this.resultItem).each(item => {
            const itemLabel = cy.wrap(item).find(this.resultProductLabel).invoke('text');
            itemLabel.should('match', filterOption)
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