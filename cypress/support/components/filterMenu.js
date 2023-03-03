import data from "../../fixtures/data.json";
const filterOption = new RegExp(data.filterOption);

class FilterMenu {
    constructor() {
        this.priceRange = '#hcont_r_cost';
        this.priceInput = `[class='fm-element filters__range__input']`
        this.filterOptionButton = `[class='fm-element-panel filters__chkslist__li']`;
        this.filterApplyButton = '.filters__searchbtn__btn';
    }

    clickFilterButton() {
        cy.contains(this.filterOptionButton, filterOption).click();
    }

    setPriceRange(min, max) {
        cy.get(this.priceRange).within(() => {
            cy.get(this.priceInput).eq(0).type(min);
            cy.get(this.priceInput).eq(1).type(max);
        })
    }

    clickFilterApplyButton() {
        cy.get(this.filterApplyButton).click();
    }
}

module.exports = FilterMenu;