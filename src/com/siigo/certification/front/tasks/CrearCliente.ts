import { Task, Wait, Duration } from "@serenity-js/core";
import { Click, Enter, isVisible, Scroll, Select } from "@serenity-js/web";
import { CreateCustomerPage } from "../UserInterface/CreateCustomerPage";
import { CustomerModel } from "../models/CustomerModel";
import { isPresent, Ensure } from "@serenity-js/assertions";
import { ScrollToElementCenter } from "../Interactions/ScrollToElementCenter";
import { DocumentoUtil } from "../utils/DocumentoUtil ";

export class CrearCliente {
    static conDatos(dataTable: CustomerModel) {

        
        const numeroIdentificacion = DocumentoUtil.resolverNumeroDocumento(dataTable.numeroIdentificacion);

        return Task.where(`#crear un cliente tercero con los siguientes datos`, 
            Click.on(CreateCustomerPage.BUTTON_CREATE),
            Wait.for(Duration.ofSeconds(2)),
            Click.on(CreateCustomerPage.OPTION_CUSTOMER),
            Wait.for(Duration.ofSeconds(8)),
            Click.on(CreateCustomerPage.SELECT_TIPO),
            Click.on(CreateCustomerPage.TIPO_PERSONA_EMPRESA(dataTable.tipoPersona)),
            Wait.for(Duration.ofSeconds(5)),           
            //Ensure.that(CreateCustomerPage.MENU_TIPO_IDENTIFICACION, isVisible()), 
            Click.on(CreateCustomerPage.SELECT_TIPO_IDENTIFICACION), 
            ScrollToElementCenter.to(CreateCustomerPage.TIPO_IDENTIFICACION_STRING(dataTable.tipoIdentificacion)), 
            Wait.upTo(Duration.ofSeconds(5)).until(
                CreateCustomerPage.TIPO_IDENTIFICACION(dataTable.tipoIdentificacion),
                isVisible()
            ),            
            Click.on(CreateCustomerPage.TIPO_IDENTIFICACION(dataTable.tipoIdentificacion)),            
            Enter.theValue(numeroIdentificacion).into(CreateCustomerPage.INPUT_NUMERO_IDENTIFICACION),
            Enter.theValue(dataTable.dv).into(CreateCustomerPage.INPUT_DV),
            Enter.theValue(dataTable.codSucursal).into(CreateCustomerPage.INPUT_CODIGO_SUCURSAL),
            Enter.theValue(dataTable.nombres).into(CreateCustomerPage.INPUT_NOMBRES),
            Enter.theValue(dataTable.apellidos).into(CreateCustomerPage.INPUT_APELLIDOS),
            Enter.theValue(dataTable.razonSocial).into(CreateCustomerPage.INPUT_RAZON_SOCIAL),
            Enter.theValue(dataTable.indicativo).into(CreateCustomerPage.INPUT_INDICATIVO),
            Enter.theValue(dataTable.telefono).into(CreateCustomerPage.INPUT_TELEFONO),
            Enter.theValue(dataTable.extension).into(CreateCustomerPage.INPUT_EXTENSION),
            Enter.theValue(dataTable.correo).into(CreateCustomerPage.INPUT_EMAIL),
            Enter.theValue(dataTable.indicativoFactura).into(CreateCustomerPage.INPUT_INDICATIVO_FACTURA),
            Enter.theValue(dataTable.telefonoFactura).into(CreateCustomerPage.INPUT_TELEFONO_FACTURA),
            Enter.theValue(dataTable.codigoPostal).into(CreateCustomerPage.INPUT_CODIGO_POSTAL),
            Click.on(CreateCustomerPage.LABEL_CIUDAD),            
            ScrollToElementCenter.to(CreateCustomerPage.INPUT_CIUDAD_STRING()),
            Click.on(CreateCustomerPage.INPUT_CIUDAD),
            Enter.theValue(dataTable.ciudad).into(CreateCustomerPage.INPUT_CIUDAD),
            Wait.for(Duration.ofSeconds(2)), 
            Click.on(CreateCustomerPage.INPUT_CIUDAD_AUTO),
            Enter.theValue(dataTable.direccion).into(CreateCustomerPage.INPUT_DIRECCION),
            Click.on(CreateCustomerPage.SELECT_TIPO_IVA),
            Click.on(CreateCustomerPage.TIPO_IVA_OPCION(dataTable.tipoIva)),
            Click.on(CreateCustomerPage.CARD_CONTACTO),
            ScrollToElementCenter.to(CreateCustomerPage.INPUT_APELLIDO_CONTACTO_STRING()),
            Enter.theValue(dataTable.nombreContacto).into(CreateCustomerPage.INPUT_NOMBRE_CONTACTO),
            Enter.theValue(dataTable.apellidoContacto).into(CreateCustomerPage.INPUT_APELLIDO_CONTACTO),
            Enter.theValue(dataTable.emailContacto).into(CreateCustomerPage.INPUT_EMAIL_CONTACTO),
            Enter.theValue(dataTable.cargo).into(CreateCustomerPage.INPUT_CARGO),
            Enter.theValue(dataTable.indicativoContacto).into(CreateCustomerPage.INPUT_INDICATIVO_CONTACTO),
            Enter.theValue(dataTable.telefonoContacto).into(CreateCustomerPage.INPUT_TELEFONO_CONTACTO),   
            Click.on(CreateCustomerPage.CARD_CONTACTO),   
            Wait.for(Duration.ofSeconds(3)),          
            Click.on(CreateCustomerPage.CARD_VENDEDOR_COBRADOR),                
            Click.on(CreateCustomerPage.LABEL_VENDEDOR),
            Enter.theValue('t').into(CreateCustomerPage.INPUT_VENDEDOR),
            Click.on(CreateCustomerPage.INPUT_VENDEDOR_AUTO),
            Click.on(CreateCustomerPage.LABEL_COBRADOR),
            Enter.theValue('t').into(CreateCustomerPage.INPUT_COBRADOR),
            Click.on(CreateCustomerPage.INPUT_COBRADOR_AUTO),
            ScrollToElementCenter.to(CreateCustomerPage.TEXTAREA_OBSERVACION_STRING()),            
            Enter.theValue('Observación de prueba').into(CreateCustomerPage.TEXTAREA_OBSERVACION),
            Click.on(CreateCustomerPage.BUTTON_SAVE),
            Wait.for(Duration.ofSeconds(5))             
        );
    }   
}
