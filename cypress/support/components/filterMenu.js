class FilterMenu {
    constructor() {
        this.priceRange = '#hcont_r_cost';
        this.priceInput = `[class='fm-element filters__range__input']`
        this.filterOptionButton = `[class='fm-element-panel filters__chkslist__li']`;
        this.filterApplyButton = '.filters__searchbtn__btn';
    }

    clickFilterButton(filterOption) {
        cy.contains(this.filterOptionButton, filterOption).click();
    }

    setPriceRange(min, max) {
        cy.get(this.priceRange).within(() => {
            cy.get(this.priceInput).first().type(min);
            cy.get(this.priceInput).last().type(max);
        })
    }

    clickFilterApplyButton() {
        cy.get(this.filterApplyButton).click();
    }
}

module.exports = FilterMenu;