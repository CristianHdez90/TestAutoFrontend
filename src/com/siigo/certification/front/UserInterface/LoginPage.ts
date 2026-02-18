import { PageElement, By, Text } from '@serenity-js/web';


export class LoginPage {
    static readonly INPUT_EMAIL = PageElement.located(
        By.id('siigoSignInName')
    ).describedAs('input correo electrónico');

    static readonly INPUT_PASSWORD = PageElement.located(
        By.id('siigoPassword')
    ).describedAs('input contraseña')


    static readonly BUTTON_LOGIN = PageElement.located(
        By.id('siigoNext')
    ).describedAs('botón iniciar sesión');

    static readonly FIELD_ERROR_MESSAGE  = PageElement.located(
        By.css('.container-input.invalid .siigo-input-hint--text > p')
    ).describedAs('mensaje de error en la página de inicio de sesión');

    static readonly GLOBAL_ERROR_MESSAGE = PageElement.located(
        By.css('#siigoError .error.pageLevel p')
    ).describedAs('mensaje de error global');  


}