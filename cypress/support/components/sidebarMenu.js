class SidebarMenu {
    constructor() {
        this.sidebarMenuItems = `[class='main-nav__list__li main-nav__list__li_wnav']`;
        this.sidebarActiveClass = 'main-nav__list__li_wnav_active';
    }

    hoverSidebarMenu() {
        cy.get(this.sidebarMenuItems).should('be.visible').each(item => {
            cy.wrap(item).should('not.have.class', this.sidebarActiveClass)
            cy.wrap(item).trigger('mouseover');
            cy.wrap(item).should('have.class', this.sidebarActiveClass)
            cy.wrap(item).trigger('mouseleave');
        });
    }

    hoverMap() {
        cy.contains("Магазины OZ").trigger('mouseover');
    }
}

module.exports = SidebarMenu;