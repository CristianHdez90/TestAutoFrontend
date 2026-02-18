import { AnswerQuestions, Question, UsesAbilities } from "@serenity-js/core";
import { CreateCustomerPage } from "../UserInterface/CreateCustomerPage";

export class ReviewMessajeAlerta {
    public static readonly value = Question.about<string>(
        'the alert message after creating a customer',async actor => {           
            return (await actor.answer(CreateCustomerPage.MENSAJE_ALERTA)).text();  
    });
}