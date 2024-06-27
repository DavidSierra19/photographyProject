# photographyProject
Proyecto: Página web para GEORGEIVAN PHOTOGRAPHY

Descripción:

Esta página web está diseñada para un fotógrafo profesional. Cuenta con un sistema de inicio de sesión y registro de usuarios, un área para visualizar un concurso de fotografía semanal y un formulario para que los usuarios puedan registrarse y participar en el concurso. La página web utiliza Angular para el frontend y MongoDB para el backend.

---

## Tecnologías utilizadas:
- Frontend: Angular
- Backend: MongoDB
- APIs: RESTful

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
                - login: Componente para el inicio de sesión.
                -register: Componente para el registro de usuarios.
                -contest: Componente para visualizar el concurso de fotografía semanal.
                -participate: Componente para el formulario de registro para participar en el concurso.
            services:
                 -api.service: Servicio para realizar peticiones a las APIs.
            models:
                -user.model: Modelo de datos para los usuarios.

  ### backend:
        app.js: Archivo principal del servidor backend.
        routes:
            users.js: Rutas para las APIs de usuarios.
            contest.js: Rutas para las APIs del concurso de fotografía.
        models:
            user.model: Modelo de datos para los usuarios

  ### APIs:
    Usuarios:
        POST /api/users: Crea un nuevo usuario.
        POST /api/users/login: Inicia sesión en un usuario existente.
    Concurso de fotografía:
        GET /api/contest: Obtiene información del concurso de fotografía semanal.
        POST /api/contest/participate: Registra a un usuario en el concurso de fotografía semanal.

---

##### Desarrollardor: David Andrey Sierra Moreno: copyright 2024, todos los derechos reservados