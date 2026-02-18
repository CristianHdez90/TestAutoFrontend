import { AnswerQuestions, Question, UsesAbilities } from "@serenity-js/core";
import { LoginPage } from "../UserInterface/LoginPage";

export class ReviewLogin {
    public static readonly valueErrorMessage = Question.about<string>(
        'the error message displayed on the login page',async actor => {           
            if (await LoginPage.FIELD_ERROR_MESSAGE.isVisible().answeredBy(actor)) {
                return (await actor.answer(LoginPage.FIELD_ERROR_MESSAGE)).text();
            }

            if (await LoginPage.GLOBAL_ERROR_MESSAGE.isVisible().answeredBy(actor)) {
                return (await actor.answer(LoginPage.GLOBAL_ERROR_MESSAGE)).text();
            }

            return '';
    })

   
}