import { PageElement, By, Text } from '@serenity-js/web';

export class CreateCustomerPage {
    static readonly BUTTON_CREATE = PageElement.located(
        By.css('div.button-container.color-primary-green.size-m.icon-position-start > button.btn-element.size-m >span')
    ).describedAs('botón crear');

    static readonly OPTION_CUSTOMER = PageElement.located(
        By.css('div.list.list-customer-two a[data-value="Clientes"]')
    ).describedAs('opción clientes');

    static readonly SELECT_TIPO = PageElement.located(
        By.xpath('(*//div[@id="app"]//div[@class="siigo-components"]//div[@class="card"]//siigo-dropdownlist-web)[1]')
    ).describedAs('Selector Tipo de Tercero');

    static TIPO_PERSONA_EMPRESA(tipo: string) {
        return PageElement.located(
            By.css(`div.siigo-components li.mdc-list-item[data-value*="${tipo}"] span.mdc-list-item__text`)
        ).describedAs(`Selector Tipo ${tipo}`);
    }

    static readonly OPCION_ES_PERSONA = PageElement.located(
        By.css('div.siigo-components li.mdc-list-item[data-value*="Es persona"] span.mdc-list-item__text')
    ).describedAs('Opción Es Persona');

    static readonly OPCION_EMPRESA = PageElement.located(
        By.css('div.siigo-components li.mdc-list-item[data-value*="Empresa"] span.mdc-list-item__text')
    ).describedAs('Opción Empresa');


    static readonly SELECT_TIPO_IDENTIFICACION = PageElement.located(
        By.xpath('(*//div[@id="app"]//div[@class="siigo-components"]//div[@class="card"]//siigo-dropdownlist-web)[2]')
    ).describedAs('Selector Tipo de Identificación');

    static SELECT_TIPO_IDENTIFICACION_STRING(): string {
        return '(*//div[@id="app"]//div[@class="siigo-components"]//div[@class="card"]//siigo-dropdownlist-web)[2]';
    }

    static TIPO_IDENTIFICACION(tipo: string) {
        return PageElement.located(
            By.css(`ul li.mdc-list-item[data-value*="${tipo}"]:nth-of-type(3) span.mdc-list-item__text`)
        ).describedAs(`Selector Tipo Identificación ${tipo}`);
    }

    static TIPO_IDENTIFICACION_STRING(tipo: string): string {
        return `ul li.mdc-list-item[data-value*="${tipo}"]:nth-of-type(3) span.mdc-list-item__text`;
    }

    static readonly INPUT_NUMERO_IDENTIFICACION = PageElement.located(
        By.css('#identification input')
    ).describedAs('input número de identificación');

    static readonly INPUT_DV = PageElement.located(
        By.id('input-check-digit')
    ).describedAs('input dígito de verificación');

    static INPUT_DV_STRING(): string {
        return '#input-check-digit';
    }

    static readonly INPUT_CODIGO_SUCURSAL = PageElement.located(
        By.css('input.mdc-text-field__input[type="number"][maxlength="3"][aria-describedby="my-helper-id"]')
    ).describedAs('input código de sucursal');

    static readonly INPUT_INDICATIVO = PageElement.located(
        By.css('input.mdc-text-field__input[name="Indicativo"]')
    ).describedAs('input indicativo');

    static readonly INPUT_TELEFONO = PageElement.located(
        By.css('input.mdc-text-field__input[name="# de Teléfono"]')
    ).describedAs('input número de teléfono');

    static readonly INPUT_EXTENSION = PageElement.located(
        By.css('input.mdc-text-field__input[name="Extensión"]')
    ).describedAs('input extensión');

    static readonly INPUT_EMAIL = PageElement.located(
        By.css('input.mdc-text-field__input[name="contactemail"]')
    ).describedAs('input email');

    static readonly INPUT_INDICATIVO_FACTURA = PageElement.located(
        By.css('input.mdc-text-field__input[name="indicativephone"]')
    ).describedAs('input indicativo');

    static readonly INPUT_TELEFONO_FACTURA = PageElement.located(
        By.css('input.mdc-text-field__input[name="contactphone"]')
    ).describedAs('input teléfono factura');

    static readonly INPUT_CODIGO_POSTAL = PageElement.located(
        By.css('siigo-textfield-web[maxlength="10"]:has-text("Código postal") input')
    ).describedAs('input código postal');

    static readonly INPUT_NOMBRES = PageElement.located(
        By.css('siigo-textfield-web:has-text("* Nombres") >> input[type="text"]')
    ).describedAs('input nombre');

    static readonly INPUT_APELLIDOS = PageElement.located(
        By.css('siigo-textfield-web:has-text("* Apellidos") >> input[type="text"]')
    ).describedAs('input apellidos');

    static readonly INPUT_RAZON_SOCIAL = PageElement.located(
        By.css('siigo-textfield-web:has-text("Nombre comercial") input')
    ).describedAs('input Nombre comercial');

    static readonly LABEL_CIUDAD = PageElement.located(
        By.id('labelAutocompleteSelectItemcity')
    ).describedAs('label ciudad');

    static readonly INPUT_CIUDAD = PageElement.located(
        By.css('siigo-autocomplete-web input#inputAutocompletecity')
    ).describedAs('input ciudad');

    static INPUT_CIUDAD_STRING(): string {
        return 'input.mdc-text-field__input[name="inputAutocompletecity"]';
    }

    static readonly INPUT_CIUDAD_AUTO = PageElement.located(
        By.id('divTDAutocompletecity1')
    ).describedAs('opción ciudad');

    static readonly INPUT_DIRECCION = PageElement.located(
        By.css('siigo-textfield-web:has-text("Dirección") input')
    ).describedAs('input dirección');

    static readonly SELECT_TIPO_IVA = PageElement.located(
        By.xpath('(*//div[@id="app"]//div[@class="siigo-components"]//div[@class="card"]//siigo-dropdownlist-web)[3]')
    ).describedAs('Selector Tipo de IVA');

    static TIPO_IVA_OPCION(tipoIva: string) {
        return PageElement.located(
            By.css(`ul li.mdc-list-item[data-value*="${tipoIva}"] span.mdc-list-item__text`)
        ).describedAs(`Opción ${tipoIva}`);
    }

    static readonly CARD_CONTACTO = PageElement.located(
        By.xpath('(*//div[@id="app"]//div[@class="siigo-components"]//div[@class="clickable"])[4]')        
    ).describedAs('Card Contacto');

    static readonly INPUT_NOMBRE_CONTACTO = PageElement.located(
        By.css('input.mdc-text-field__input[name="FirstName"]')
    ).describedAs('input nombre contacto');

    static INPUT_APELLIDO_CONTACTO_STRING(): string {
        return 'input.mdc-text-field__input[name="LastName"]';
    }

    static readonly INPUT_APELLIDO_CONTACTO = PageElement.located(
        By.css('input.mdc-text-field__input[name="LastName"]')
    ).describedAs('input apellido contacto');

    static readonly INPUT_EMAIL_CONTACTO = PageElement.located(
        By.id('emailinput')
    ).describedAs('input email contacto');

    static readonly INPUT_CARGO = PageElement.located(
        By.css('input.mdc-text-field__input[name="Charge"]')
    ).describedAs('input cargo');

    static readonly INPUT_INDICATIVO_CONTACTO = PageElement.located(
        By.css('input.mdc-text-field__input[name="Indicative"]')
    ).describedAs('input indicativo contacto');

    static readonly INPUT_TELEFONO_CONTACTO = PageElement.located(
        By.css('input.mdc-text-field__input[name="Number"]')
    ).describedAs('input teléfono contacto');

    static readonly CARD_VENDEDOR_COBRADOR = PageElement.located(
        By.xpath('(*//div[@id="app"]//div[@class="siigo-components"]//div[@class="clickable"])[5]')
    ).describedAs('Card Vendedor/Cobrador');

    static readonly LABEL_VENDEDOR = PageElement.located(
        By.id('labelAutocompletesalesman')
    ).describedAs('Label Vendedor');

    static readonly INPUT_VENDEDOR = PageElement.located(
        By.id('inputAutocompletesalesman')
    ).describedAs('input vendedor');

    static readonly INPUT_VENDEDOR_AUTO = PageElement.located(
        By.id('divTDAutocompletesalesman0')
    ).describedAs('opción vendedor');

    static LABEL_VENDEDOR_STRING(): string {
        return '#labelAutocompleteSelectItemsalesman';
    }

    static readonly LABEL_COBRADOR = PageElement.located(
        By.id('labelAutocompletecollector')
    ).describedAs('Label Cobrador');

    static readonly INPUT_COBRADOR = PageElement.located(
        By.id('inputAutocompletecollector')
    ).describedAs('input cobrador');   

    static readonly INPUT_COBRADOR_AUTO = PageElement.located( 
        By.id('divTDAutocompletecollector0')
    ).describedAs('opción cobrador');

     static COBRADOR_LABEL_STRING(): string {
        return '#labelAutocompleteSelectItemcollector';
    }

    static readonly CARD_OBSERVACION = PageElement.located(
        By.xpath('(*//div[@id="app"]//div[@class="siigo-components"]//div[@class="clickable"])[7]')
    ).describedAs('Card Observación');

    static readonly TEXTAREA_OBSERVACION = PageElement.located(
        By.id('textareainput')
    ).describedAs('textarea observación');

    static TEXTAREA_OBSERVACION_STRING(): string {
        return '#textareainput';
    }

    static readonly BUTTON_SAVE = PageElement.located(
        By.xpath('*//button[@class="button green filled" and contains(text()," Guardar ")]')
    ).describedAs('botón guardar');

    static readonly BUTTON_CANCEL = PageElement.located(
        By.xpath('*//button[@class="button red" and contains(text(),"Cancelar")]')
    ).describedAs('botón cancelar');

    static readonly MENSAJE_ALERTA = PageElement.located(
        By.css('[role="alert"] p')
    ).describedAs('Mensaje de alerta');






    














}
