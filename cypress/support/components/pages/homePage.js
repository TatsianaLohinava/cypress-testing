const Input = require("../elements/input");
const SidebarMenu = require("../elements/sidebarMenu");
const LoginForm = require("../elements/loginForm");
const ProductContainer = require("../elements/productContainer");

export class HomePage {

    constructor() {
        this.input = new Input();
        this.sidebarMenu = new SidebarMenu();
        this.loginButton = '.top-panel__userbar__auth';
        this.loginForm = new LoginForm();
        this.productContainer = new ProductContainer();
    }

    getInput() {
        return this.input;
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