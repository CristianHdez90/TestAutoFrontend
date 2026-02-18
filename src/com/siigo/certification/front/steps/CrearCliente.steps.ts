import { Then, When } from '@cucumber/cucumber';
import { Actor, Duration, Wait } from '@serenity-js/core';
import { Ensure, equals, includes } from '@serenity-js/assertions';
import { CrearCliente } from '../tasks/CrearCliente';
import { CustomerModel } from '../models/CustomerModel';
import { ReviewMessajeAlerta } from '../questions/ReviewMessajeAlerta';
import { ReviewStatusCodeApi } from '../questions/ReviewStatusCodeApi';
import { GetApi } from '../tasks/GetApi';
import { UrlUtil } from '../utils/UrlUtil ';


When('{pronombre} crea un cliente tercero con los siguientes datos:', async (actor: Actor, dataTable) => {
  await actor.attemptsTo(
    CrearCliente.conDatos(dataTable.hashes()[0] as CustomerModel)
  );
});

Then('{pronombre} usuario al finalizar el proceso, el sistema debe mostrar {string}', async (actor: Actor, mensaje: string) => {
  await actor.attemptsTo(
    Ensure.that(
      ReviewMessajeAlerta.value,
      includes(mensaje)
    )
  );
});

Then('{pronombre} usuario debe validar que el cliente tercero se haya creado correctamente en el sistema en el API relation', async (actor: Actor) => {
    Wait.for(Duration.ofSeconds(20));
    const uuid = await UrlUtil.obtenerUuidActual(actor);    
    console.log('UUID actual:', uuid);
    console.log('Endpoint a consultar:', `${process.env.BASE_URL_API}/${uuid}/relation`);
    await actor.attemptsTo(
        GetApi.withEndpoint(`${process.env.BASE_URL_API}/${uuid}/relation`)
    );
    await actor.attemptsTo(
        Ensure.that(ReviewStatusCodeApi.isStatusCodeOk, equals(200))
    );

});