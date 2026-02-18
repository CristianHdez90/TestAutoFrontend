import { Task, Wait, Duration } from "@serenity-js/core";
import { Click, Enter, Scroll } from "@serenity-js/web";
import { LoginPage } from "../UserInterface/LoginPage";

export class IniciarSesion {   
    static conCredenciales(correo: string, password: string) {
        return Task.where(`#log in with invalid credentials`, 
            Enter.theValue(correo).into(LoginPage.INPUT_EMAIL),
            Enter.theValue(password).into(LoginPage.INPUT_PASSWORD),
            Click.on(LoginPage.BUTTON_LOGIN),        
            Wait.for(Duration.ofSeconds(12))    
        );
    }
}