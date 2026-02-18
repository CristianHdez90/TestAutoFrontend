import { AnswerQuestions, Question, UsesAbilities } from "@serenity-js/core";
import { DashboardPage } from "../UserInterface/DashboardPage";


export class ReviewPerfilUsuario {
    public static readonly valueUserName = Question.about<string>(
        'the username displayed on the dashboard',async actor => {           
            return (await actor.answer(DashboardPage.USERNAME_DISPLAY)).text();  
    });
}
