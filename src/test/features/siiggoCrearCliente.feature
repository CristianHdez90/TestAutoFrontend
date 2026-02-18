@terceros
Feature: Gestión de terceros en Siigo
  Como usuario autenticado
  Quiero crear un cliente tercero
  Para registrarlo correctamente en el sistema

  Background:
    Given Userqa abre la aplicación Siigo en la página de inicio de sesión
    When el ingresa las credenciales válidas e inicia sesión

  @crearTercero
  Scenario Outline: Crear cliente tercero exitosamente
    When el crea un cliente tercero con los siguientes datos:
      | tipoPersona   | tipoIdentificacion   | numeroIdentificacion   | dv   | codSucursal   | nombres   | apellidos   | razonSocial   | ciudad   | direccion   | indicativo   | telefono   | extension   | correo   | tipoIva   | indicativoFactura   | telefonoFactura   | codigoPostal   | nombreContacto   | apellidoContacto   | emailContacto   | cargo   | indicativoContacto   | telefonoContacto   |
      | <tipoPersona> | <tipoIdentificacion> | <numeroIdentificacion> | <dv> | <codSucursal> | <nombres> | <apellidos> | <razonSocial> | <ciudad> | <direccion> | <indicativo> | <telefono> | <extension> | <correo> | <tipoIva> | <indicativoFactura> | <telefonoFactura> | <codigoPostal> | <nombreContacto> | <apellidoContacto> | <emailContacto> | <cargo> | <indicativoContacto> | <telefonoContacto> |
    Then el usuario al finalizar el proceso, el sistema debe mostrar "<resultado>"
    And el usuario debe validar que el cliente tercero se haya creado correctamente en el sistema en el API relation

    Examples:
      | tipoPersona | tipoIdentificacion     | numeroIdentificacion | dv | codSucursal | nombres | apellidos | razonSocial | ciudad   | direccion    | indicativo | telefono | extension | correo         | tipoIva               | indicativoFactura | telefonoFactura | codigoPostal | nombreContacto | apellidoContacto | emailContacto    | cargo   | indicativoContacto | telefonoContacto | resultado                                |
      | Es persona  | Cédula de ciudadanía   |             Random   |  1 |         101 | Juan    | Perez     | test        | Sabaneta | cl45a #46-78 |         57 |  2859984 |       401 | test1@test.com | No responsable de IVA |               102 |         2587474 |        58485 | Pepito         | Garcia           | pepito@gamil.com | Gerente |                104 |          7852385 | Tercero guardado exitosamente            |
      # | Es persona  | Cédula de ciudadanía   |             1234567  |  1 |         101 | Juan    | Perez     | test        | Sabaneta | cl45a #46-78 |         57 |  2859984 |       401 | test1@test.com | No responsable de IVA |               102 |         2587474 |        58485 | Pepito         | Garcia           | pepito@gamil.com | Gerente |                104 |          7852385 | Tercero guardado exitosamente            |
      # | Empresa     |                        |              1234567 |  1 |         102 |         |           | Empresa SAS | Sabaneta | cl45a #46-78 |         57 |  2859984 |       402 | test1@test.com | Responsable de IVA    |               102 |         2587474 |        58485 | Pepito         | Garcia           | pepito@gamil.com | Gerente |                104 |          7852385 | Tercero guardado exitosamente            |
      # | Es persona  | Tarjeta de extranjería |                12345 |  1 |         103 | Juan    | Perez     |             | Sabaneta | cl45a #46-78 |         57 |  2859984 |       403 | test1@test.com | No responsable de IVA |               102 |         2587474 |        58485 | Pepito         | Garcia           | pepito@gamil.com | Gerente |                104 |          7852385 | Error longitud identificación            |
      # | Es persona  | Tarjeta de identidad   |               123456 |  1 |         104 |         | Perez     |             | Sabaneta | cl45a #46-78 |         57 |  2859984 |       404 | test1@test.com | No responsable de IVA |               102 |         2587474 |        58485 | Pepito         | Garcia           | pepito@gamil.com | Gerente |                104 |          7852385 | Tienes campos obligatorios sin completar |
      # | Es persona  | Cédula de ciudadanía   |               123456 |  1 |         105 |         |           |             | Sabaneta | cl45a #46-78 |         57 |  2859984 |       405 | test1@test.com | No responsable de IVA |               102 |         2587474 |        58485 | Pepito         | Garcia           | pepito@gamil.com | Gerente |                104 |          7852385 | Tienes campos obligatorios sin completar |
