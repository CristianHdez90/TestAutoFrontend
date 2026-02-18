import { Then, When } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { IniciarSesion } from '../tasks/IniciarSesion';
import { Ensure, equals, includes } from '@serenity-js/assertions';
import { ReviewCurrentUrl } from '../questions/ReviewCurrentUrl';
import { ReviewPerfilUsuario } from '../questions/ReviewPerfilUsuario';
import { ReviewLogin } from '../questions/ReviewLogin';
import { UrlUtil } from '../utils/UrlUtil ';
import { GetApi } from '../tasks/GetApi';
import { ReviewStatusCodeApi } from '../questions/ReviewStatusCodeApi';


When('{pronombre} ingresa las credenciales válidas e inicia sesión', { timeout: 40000 }, async (actor: Actor) => {
    await actor.attemptsTo(IniciarSesion.conCredenciales(process.env.EMAIL || '', process.env.PASSWORD || ''));
});

Then('{pronombre} debe ser redirigido al dashboard principal', async (actor: Actor) => {
    await actor.attemptsTo(
        Ensure.that(
            ReviewCurrentUrl.valueCurrentUrl(),
            includes('dashboard')
        )
    );
});

Then('{pronombre} debe visualizar su nombre de usuario en pantalla', async (actor: Actor) => {
    await actor.attemptsTo(
        Ensure.that(
            ReviewPerfilUsuario.valueUserName,
            includes('Reto Auto')
        )
    );

});

When('{pronombre} intenta iniciar sesión con correo {string} y contraseña {string}', async (actor: Actor, correo: string, password: string) => {
    await actor.attemptsTo(IniciarSesion.conCredenciales(correo, password));
});

Then('{pronombre} sistema debe mostrar {string}', async (actor: Actor, mensaje: string) => {
    await actor.attemptsTo(
        Ensure.that(
            ReviewLogin.valueErrorMessage,
            equals(mensaje)
        )
    );    
    

});

