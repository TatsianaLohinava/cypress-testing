class ProductContainer {
    constructor() {
        this.containerHeader = `*[id^='category_goods_container']`;
        this.unpinnedSection = 'mpgs-nopin';
        this.unpinButton = '.mpgs-unpin';
    }

    unpinHeaders() {
        cy.get(this.containerHeader).each(header => {
            if (!header.hasClass(this.unpinnedSection)) {
                cy.wrap(header).within(() => {
                    cy.wrap(header).get(this.unpinButton).click();
                    cy.wrap(header).should('have.class', this.unpinnedSection)
                })
            }
        });
    }
}

module.exports = ProductContainer;