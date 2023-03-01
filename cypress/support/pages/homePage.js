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
    }

    open() {
        cy.visit('/');
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