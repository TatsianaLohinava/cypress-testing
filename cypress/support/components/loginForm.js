class LoginForm {
    constructor() {
        this.emailLoginButton = '#loginFormLoginEmailLink';
        this.loginForm = '#loginForm';
        this.emailInput = `[type='email']`;
        this.passwordInput = `[type='password']`;
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
}

module.exports = LoginForm;