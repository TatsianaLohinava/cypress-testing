const SearchInput = require("../components/searchInput");
const SidebarMenu = require("../components/sidebarMenu");
const LoginForm = require("../components/loginForm");
const ProductContainer = require("../components/productContainer");

export class HomePage {

    constructor() {
        this.searchInput = new SearchInput();
        this.sidebarMenu = new SidebarMenu();
        this.loginButton = '.top-panel__userbar__auth';
        this.loginForm = new LoginForm();
        this.productContainer = new ProductContainer();
        this.slider = `[class='b-map__popup b-map__popup_processing']`;
        this.maps='ymaps'
    }

    open() {
        cy.visit('/');
    }

    waitUntilNotVisible() {
        cy.get(this.slider)
            .should('be.visible')
            .then(slider => {
                cy.window()
                    .then(window => window.getComputedStyle(slider[0], 'after'))
                    .then(after => cy.wrap(after.visibility).should('not.equal', 'visible'));
                cy.get(this.maps).should('be.visible');
            })
    }

    getSearchInput() {
        return this.searchInput;
    }

    getSidebarMenu() {
        return this.sidebarMenu;
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    getLoginForm() {
        return this.loginForm;
    }

    getProductContainer() {
        return this.productContainer;
    }

}