class SidebarMenu {
    constructor() {
        this.sidebarMenuItems = `[class='main-nav__list__li main-nav__list__li_wnav']`;
        this.sidebarActiveClass = 'main-nav__list__li_wnav_active';
    }

    hoverSidebarMenu() {
        cy.get(this.sidebarMenuItems).each(item => {
            cy.hasClass(item, this.sidebarActiveClass, false);
            cy.wrap(item).trigger('mouseover');
            cy.hasClass(item, this.sidebarActiveClass, true);
            cy.wrap(item).trigger('mouseleave');
        });
    }
}

module.exports = SidebarMenu;