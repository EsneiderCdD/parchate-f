# Parchate

Todo desarrollador conoce ese momento: terminas una tarea, haces un push, te preparas un café o la comida, y te preguntas: *"¿Qué hay para ver ahora mismo?"*. 

**Parchate** nace exactamente para responder a esa pregunta. Es un punto de encuentro ágil y directo, diseñado como una cartelera o calendario en tiempo real que conecta a desarrolladores en sus ratos libres con creadores de contenido del ecosistema tech (ya sea en Twitch, YouTube u otras plataformas).

## El Propósito
Más allá de ser un simple directorio, Parchate busca resolver la fricción de tener que saltar entre distintas plataformas buscando quién está transmitiendo contenido interesante de programación, tecnología o divulgación. 

Su filosofía se basa en dos pilares:
1. **Acceso sin barreras:** Si solo quieres entrar a buscar qué ver, no necesitas crear una cuenta, ni dejar tus datos. Entras, miras el horario, haces clic y ya estás aprendiendo o entreteniéndote.
2. **Impulso a nuevas voces:** Aunque se apoya en los grandes referentes de la comunidad, Parchate es un altavoz fundamental para nuevos divulgadores que están empezando a crear contenido y necesitan un espacio para decir: *"Hey, a esta hora voy a estar compartiendo pantalla y picando código"*.

## ¿Cómo funciona?
La lógica de negocio es minimalista por diseño, dividiendo la experiencia en dos tipos de interacción:

* **Para los Espectadores (Consumidores):** La experiencia es anónima y fluida. Los usuarios ingresan a la plataforma y visualizan de inmediato qué creadores están transmitiendo en ese momento y cuáles son los próximos eventos programados en las horas siguientes.
* **Para los Creadores de Contenido:** Son los únicos que requieren registro y autenticación. A través de su cuenta, pueden enviar solicitudes y gestionar la información de sus transmisiones (cuándo estarán en vivo, de qué hablarán y en qué plataforma), alimentando así la cartelera global.

## Arquitectura y Stack Tecnológico
Parchate está construido bajo una arquitectura moderna y eficiente, priorizando la velocidad y la simplicidad tanto en el frontend como en el backend.

* **Stack Principal:** MERN (MongoDB, Express, React, Node.js) complementado con JavaScript vanilla.
* **Base de Datos:** Estructurada en MongoDB con un enfoque directo al negocio. Se compone de dos colecciones principales:
  * `creadores`: Almacena la información de los divulgadores registrados.
  * `eventos`: Gestiona la agenda, horarios y enlaces de las transmisiones.

Parchate no es una red social compleja; es el canal directo entre el tiempo libre de un dev y el conocimiento de la comunidad.