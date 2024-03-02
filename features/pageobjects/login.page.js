const { $ } = require('@wdio/globals')
const Page = require('./page');

// const errorLockedOutUser = (message) => $('/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3');
// get inputUsername () {return $('#user-name');}
// get inputPassword () {return $('#password');}
// get btnLogin () {return $('#login-button');}

const element = {
    inputUsername : $('#user-name'),
    inputPassword : $('#password'),
    btnLogin : $('#login-button'),
    errorLockedOutUser : (message) => $(`/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3`)
}

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username) {
        await element.inputUsername.waitForDisplayed({timeout : 2500});
        await element.inputUsername.setValue(username);
        await element.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.btnLogin.click();
    }
    // // async login () {
    // //     await this.inputUsername.setValue(process.env.USERNAME_lockedOutUser);
    // //     await this.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
    // //     await this.btnLogin.click();
    // //     console.log('USERNAME = ${process.env.USERNAME_LockedOutUser}')
    // }

    async validateLockedOutUserError (message) {
        await element.errorLockedOutUser(message).waitForDisplayed()
        await expect(element.errorLockedOutUser(message)).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();