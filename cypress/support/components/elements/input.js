class Input {
    constructor() {
        this.inputField = '#top-s';
        this.inputResetButton = '.input-reset';
        this.inputSearchButton = '.top-panel__search__btn';
    }

    typeInputQuery(query) {
        cy.get(this.inputField).type(query);
    }

    clickSearchButton() {
        cy.get(this.inputSearchButton).click();
    }

    clickInputResetButton() {
        cy.get(this.inputResetButton).click();
    }

    validateInputIsEmpty() {
        cy.get(this.inputField).should('have.value', '');
    }
}

module.exports = Input;