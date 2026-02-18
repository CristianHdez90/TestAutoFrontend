import { Task, Interaction, Duration } from "@serenity-js/core";
import { Send, GetRequest, LastResponse } from '@serenity-js/rest';

export class GetApi{
    static withEndpoint(endpoint: string){
        return Task.where(`#actor realiza una petición GET al endpoint ${endpoint}`,
            Send.a(GetRequest.to(endpoint)),
            Interaction.where(`#actor espera 10 segundos para procesar la respuesta`, async actor => {
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
            ),
             // Después de enviar la request, mostramos la respuesta
            // Interaction.where(`#actor muestra la respuesta`, async actor => {
            //     const response = await LastResponse.body<any>().answeredBy(actor);
            //     console.log(`Respuesta recibida: ${JSON.stringify(response)}`);
            // })
        );
    }
}