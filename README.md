# photographyProject

---

Proyecto: Página web para GEORGEIVAN PHOTOGRAPHY

Descripción:

Esta página web está diseñada para un fotógrafo profesional. Cuenta con un sistema de inicio de sesión y registro de usuarios, un área para visualizar un concurso de fotografía semanal y un formulario para que los usuarios puedan registrarse y participar en el concurso. La página web utiliza Angular para el frontend y MongoDB para el backend.

---

## Tecnologías utilizadas:
- Frontend: Angular
- Backend: MongoDB
- APIs: RESTful
- Entre Otras

## Funcionalidades:
- Inicio de sesión y registro de usuarios
- Visualización del concurso de fotografía semanal
- Formulario de registro para participar en el concurso
- Envío de información de registro a la base de datos

## Requisitos previos:
- Tener Node.js y npm instalados
- Tener MongoDB instalado y en ejecución

## Instrucciones de uso:
1. Clonar el repositorio
2. Instalar las dependencias:
    npm install
3. Iniciar el servidor MongoDB:
    mongod
4. Iniciar el servidor de desarrollo Angular:
    ng serve
5. Acceder a la página web en http://localhost:4200

---

## Estructura del proyecto:
   ### frontend:
        app:
            components:
                -footer: pie de la pagina web
                -header: Encabezado de la pagina web
                -home: Parte inicial de la pagina web.
                -inicio-seccion: Componente para el inicio de sesión.
                -navegacion: Navegacion de la pagina web
                -pagina-no-encontrada: Pagina de error por si no esta bien el link
                -participar: Parte para registarse en el concurso
                -registro: registro para poder entrar a pagina web
                -servicios: planes del fotografo
                -zona-privada: Se monstrara los concursantes

            services:
                 -concurso.service: Servicio para realizar peticiones a las APIs del concurso.
                 -crear-usuario: Servicio para realizar peticion a las Apis de crear usuario
                 -login: Servicio para realizar peticion a las APIs de inicio de seccion
            interfaces:
                -concurso.ts: Modelo de datos para el concurso.
                -crear-usuario: Modelo de datos para crear un usuario.
                -credenciales: Modelo de datos para logearse.

  ### backend:
        servidor.js: Archivo principal del servidor backend.
        index.js: Ejecutar en puerto 3000 
        conexionBD: Ejecutar en la base de datos

        rutas
            rutaUsuarios.js: Rutas para las APIs de usuarios.
            rutaInicioSeccion.js: Rutas para las APIS de inicio de seccion.
            rutaConcurso.js: Rutas para las APIs del concurso de fotografía
        modelos
            modelConcurso.js:  Modelo de datos para los participantes del concurso
            modeloUsuarios.js:  Modelo de datos para los usuarios
        controladores
            controladorConcurso.js: CRUD para el API de Concurso 
            controladoresInicioSeccion: CRUD para el API de Inicio de seccion 
            controladorUsuarios.js: CRUD para el API de usuarios 
        helper:
            funciones.js: Funciones adicionales

  ### APIs:
    Usuarios:
        POST /api/users: Crea un nuevo usuario.
        POST /api/users/login: Inicia sesión en un usuario existente.
    Concurso de fotografía:
        GET /api/contest: Obtiene información del concurso de fotografía semanal.
        POST /api/contest/participate: Registra a un usuario en el concurso de fotografía semanal.

---

##### Desarrollardor: David Andrey Sierra Moreno: copyright 2024, todos los derechos reservados