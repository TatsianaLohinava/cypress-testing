class SearchInput {
    constructor() {
        this.searchInputField = '#top-s';
        this.inputResetButton = '.input-reset';
        this.inputSearchButton = '.top-panel__search__btn';
    }

    typeSearchQuery(query) {
        cy.get(this.searchInputField).type(query);
    }

    clickSearchButton() {
        cy.get(this.inputSearchButton).click();
    }

    clickInputResetButton() {
        cy.get(this.inputResetButton).click();
    }

    validateInputIsEmpty() {
        cy.get(this.searchInputField).should('have.value', '');
    }
}

module.exports = SearchInput;