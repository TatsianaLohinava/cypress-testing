class ProductContainer {
    constructor() {
        this.containerHeader = `*[id^='category_goods_container']`;
        this.unpinnedSection = 'mpgs-nopin';
        this.unpinButton = '.mpgs-unpin';
    }

    unpinHeaders() {
        cy.get(this.containerHeader).each(header => {
            if (cy.hasClass(header, this.unpinnedSection, false)) {
                cy.wrap(header).within(() => {
                    cy.wrap(header).get(this.unpinButton).click();
                    cy.hasClass(header, this.unpinnedSection, true)
                })
            }
        });
    }
}

module.exports = ProductContainer;