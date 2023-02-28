export class HomePage {

    constructor() {
        this.inputField = '#top-s';
        this.inputResetButton = '.input-reset';
        this.inputSearchButton = '.top-panel__search__btn';
        this.sidebarMenuItems = `[class='main-nav__list__li main-nav__list__li_wnav']`;
        this.sidebarActiveClass = 'main-nav__list__li_wnav_active';
        this.loginButton = '.top-panel__userbar__auth';
        this.emailLoginButton = '#loginFormLoginEmailLink';
        this.loginForm = '#loginForm';
        this.containerHeader = `*[id^='category_goods_container']`;
        this.emailInput = `[type='email']`;
        this.passwordInput = `[type='password']`;
        this.unpinnedSection = 'mpgs-nopin';
        this.unpinButton = '.mpgs-unpin';
    }

    getInput() {
        return cy.get(this.inputField);
    }

    typeInputQuery(query) {
        cy.get(this.inputField).type(query);
    }

    clickInputResetButton() {
        cy.get(this.inputResetButton).click();
    }

    clickSearchButton() {
        cy.get(this.inputSearchButton).click();
    }

    hoverSidebarMenu() {
        cy.get(this.sidebarMenuItems).each(item => {
            cy.hasClass(item, this.sidebarActiveClass, false);
            cy.wrap(item).trigger('mouseover');
            cy.hasClass(item, this.sidebarActiveClass, true);
            cy.wrap(item).trigger('mouseleave');
        });
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    clickEmailLoginButton() {
        cy.get(this.emailLoginButton).click();
    }

    fillInForm(email, pass) {
        cy.get(this.loginForm).within(() => {
            cy.get(this.emailInput).type(email);
            cy.get(this.passwordInput).type(pass);
        })
    }

    submitForm() {
        cy.get(this.loginForm).submit();
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