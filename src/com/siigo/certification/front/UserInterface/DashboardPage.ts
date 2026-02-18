import { PageElement, By } from '@serenity-js/web';

export class DashboardPage {
    static readonly USERNAME_DISPLAY = PageElement.located(
        By.css('[data-id="div-user-logged-in"] button-atom button.btn-element span')
    ).describedAs('elemento del nombre de usuario en el dashboard');
}