@siigo
Feature: Acceso y gestión de terceros en Siigo
  Como usuario autenticado
  Quiero interactuar con los módulos del sistema
  Para administrar la información de clientes

  Background:
    Given Userqa abre la aplicación Siigo en la página de inicio de sesión

  @smoke
  Scenario: Inicio de sesión exitoso
    When el ingresa las credenciales válidas e inicia sesión
    Then el debe ser redirigido al dashboard principal
    And el debe visualizar su nombre de usuario en pantalla
  
  
  # Validaciones + Partición de Equivalencias + Tabla de Decisión
  @loginValidaciones
  Scenario Outline: Validaciones de inicio de sesión
    When el intenta iniciar sesión con correo "<correo>" y contraseña "<password>"
    Then el sistema debe mostrar "<mensaje>"

    Examples:
      | correo           | password    | mensaje                          |
      | usuario@test.com |             | Campo obligatorio                |
      |                  | Password123 | Campo obligatorio                |
      | usuarioinvalido  | Password123 | Correo inválido                  |
      | usuario@test.com | wrongpass   | Usuario o contraseña inválidos   |
    
