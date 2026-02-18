import { Question } from "@serenity-js/core";
import { Page } from "@serenity-js/web/lib/screenplay/models/Page";

export class ReviewCurrentUrl {
    /**
   * Question para verificar Url Actual, se puede usar para validar redirecciones o navegación entre páginas,
   * ejemplo: después de iniciar sesión, verificar que se redirige al dashboard, o después de hacer clic en un enlace, verificar que se navega a la página correcta.
   * @param expectedUrl La URL esperada a verificar.
   * @returns Una instancia de ReviewCurrentUrl con la URL esperada.
   */
  static toBe(expectedUrl: string) {
    return Question.about(`the current URL to be ${expectedUrl}`, async (actor) => {
      const currentUrl = await actor.answer(Page.current().url().href);
      return currentUrl === expectedUrl;
    });
  }  

  static valueCurrentUrl() {
    return Question.about('the current URL', async actor => {
      return actor.answer(Page.current().url().href);
    });
  }

}