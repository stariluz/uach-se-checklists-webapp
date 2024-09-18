# Propuesta de proyecto 

## Introducción
Nuestro proyecto será un sistema de checklists que tiene la capacidad de almacenar diversos tipos de checklists, cada uno con tareas o actividades diferentes que una persona puede llegar a realizar.  
La persona encargada de crear su checklist puede compartirla con diversas personas, siempre y cuando tengan sesión iniciada con su cuenta de correo electrónico de Google. La persona encargada de compartirlo puede quitar el acceso en todo momento que lo desee. Puede determinar si la persona puede marcar como completadas las actividades que contiene el checklist, o simplemente visualizarlas. Al marcar una actividad como completada, podrá ver quién la realizó.

Este proyecto implica la creación de un sistema desde cero que cumpla con diversas formas para llevar a cabo la correcta ingeniería de software.

## Antecedentes

### Microsoft To Do
La página principal es bastante simple y minimalista, lo cual facilita navegar entre cada actividad y tarea.

#### Proceso de creación de Tarea
El sistema se adapta a todo tipo de usuarios, ya que se puede presionar el botón de agregar tarea o simplemente pulsar "Enter" (en la versión de escritorio).

#### Lista
La posibilidad de dar importancia a las tareas mediante una estrella es muy útil. También puedes ajustar su fecha de vencimiento y marcarla como completada.

#### Completada
Cuando completas una tarea, el sistema la mueve a una pestaña separada, lo que es práctico si no quieres ver las tareas ya completadas. Sin embargo, puedes verlas fácilmente si lo deseas.

#### Funcionalidades adicionales
El sistema incluye fecha de vencimiento, recordatorios y la posibilidad de repetir actividades. La principal diferencia entre Microsoft To Do y nuestro sistema será la capacidad de compartir checklists mediante una cuenta de Google.

### Notion
Notion es una herramienta de productividad que permite a los usuarios manejar notas, tareas, calendarios, bases de datos y wikis. Su éxito radica en la flexibilidad de su plataforma.

#### Diferencias con otras plataformas
Notion es utilizado por empresas como Spotify, Discord y Toyota. Además, incluye herramientas como IA y sitios web, lo que le permite reemplazar otros software. También permite a los usuarios elegir su experiencia en la plataforma desde el inicio, brindando diversas herramientas según la opción seleccionada.

#### Desventajas
Notion carece de un espacio para la verificación de tareas y asignación eficiente de responsabilidades dentro de un equipo, lo que requiere otros software adicionales para este propósito.

### Streak
Streak es una to-do list diseñada para generar hábitos mediante la creación de una lista de tareas diarias. Muestra cuántas veces se han cumplido las tareas marcadas, y está limitada a 6 tareas diarias. La aplicación busca mantener la motivación del usuario mediante la visualización de su progreso.

### Google Tasks
Google Tasks es una subaplicación de Google Calendar que permite definir listas de tareas y asociarlas a una cuenta de Google. Aunque es una de las herramientas más utilizadas, carece de opciones como asignar una fecha común para todas las tareas de una lista.

## Definición del problema
Durante el desarrollo de actividades en equipo, a menudo no es posible coordinar el trabajo mediante un chat debido a la inactividad de algunos miembros. Aunque se pueden llevar a cabo seguimientos mediante mensajes, estos suelen perderse entre otros. Este tipo de actividades requiere la coordinación de tareas, pero lo más importante es saber qué tareas se han completado, cuándo y por quién, sin necesidad de registrar más detalles.

## Justificación del proyecto
### Innovación
Este sistema permitirá compartir checklists de forma simple y eficiente, mejorando la gestión de responsabilidades y organización del tiempo. Será particularmente útil en entornos educativos, donde se requiere colaboración continua sin complicar el registro de detalles.

### Impacto
La aplicación mejorará la coordinación de tareas dentro de grupos de trabajo, permitiendo la colaboración en tiempo real y reduciendo el riesgo de errores, duplicación de esfuerzos y falta de comunicación.

### Profundidad
El proyecto abordará la gestión colaborativa de tareas con un enfoque integral, implementando características como la creación de checklists y colaboración multiusuario. La interfaz será intuitiva y la arquitectura del backend permitirá la integración con otros servicios.

## Objetivo general
Desarrollar un sistema intuitivo y eficiente de checklists que permita a los usuarios organizar, gestionar y compartir sus listas de tareas de manera sencilla. El sistema fomentará la colaboración en tiempo real y mejorará la productividad en actividades grupales.

## Requerimientos Funcionales

| **ID**  | **Nombre del Requerimiento**                          | **Descripción**                                                                                                                                                    |
|--------|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF-1   | Tareas                                            | La tarea tiene un título. Se le puede asignar opcionalmente una fecha de realización. La tarea se puede marcar como completada o no. La tarea se puede editar y eliminar. |
| RF-2   | Tareas completadas en checklist compartidas       | Dentro de una checklist compartida, cuando una tarea es marcada como completada se debe registrar y mostrar quién la completó y en qué momento.                      |
| RF-3   | Agrupación de tareas                              | Las tareas se pueden agrupar soportando solo un nivel de jerarquía. Solo el dueño de la checklist puede agrupar tareas.                                              |
| RF-4   | Grupo de tareas                                   | Un grupo de tareas tiene un título. Por defecto seguirá la regla "Grupo 1", "Grupo 2", etc. El grupo se puede editar y eliminar.                                     |
| RF-5   | Ordenamiento de tareas                            | Las tareas se pueden visualizar ordenadas alfabéticamente, por su fecha de creación o por su fecha de actualización. El ordenamiento por defecto es por fecha de creación. |
| RF-6   | Creación de una checklist                         | Una checklist lleva un título y opcionalmente una fecha de realización. Se puede indicar opcionalmente si la checklist tiene completitud.                            |
| RF-7   | Checklists con completitud                        | Una checklist con la opción de completitud habilitada muestra una barra de progreso en proporción a la cantidad de tareas realizadas respecto al total de tareas.     |
| RF-8   | Clasificación de los checklists                   | Hay dos categorías de checklists: Activos y Anteriores.                                                                                                             |
| RF-9   | Checklists anteriores                             | Incluye checklists completados (todas las tareas completadas) y checklists inactivos (sin interacciones en más de 1 mes).                                           |
| RF-10  | Usuarios con cuenta de Google                     | La cuenta de usuario está vinculada exclusivamente a Google, que es el único método de inicio de sesión y creación de cuenta.                                        |
| RF-11  | Inicio de sesión                                  | Al iniciar sesión, se redirige a la pantalla de cuentas de Google. Si existe un usuario con esa cuenta, se le da acceso a la plataforma. Si no, se redirige a crear cuenta. |
| RF-12  | Creación de la cuenta                             | La cuenta se crea iniciando sesión con Google. Si ya existe el usuario, se notifica que ya está registrado. Si no, se crea automáticamente y se redirige a la pantalla de inicio. |
| RF-13  | Acceso a la plataforma sin inicio de sesión        | Las únicas pantallas visibles sin inicio de sesión son las de inicio de sesión y creación de cuenta.                                                                |
| RF-14  | Pantalla de inicio                                | Muestra la clasificación de checklists, mostrando su completitud (si aplica) y su fecha de creación. Al hacer clic, se redirige a la pantalla de checklist.          |
| RF-15  | Pantalla de checklist                             | Muestra un banner con el título, completitud (si aplica) y fecha de creación. Enlista las tareas y grupos de tareas. Si no hay tareas, permite crear la primera tarea. |
| RF-16  | Otorgar acceso al checklist                       | Los usuarios pueden dar acceso a una checklist a otros mediante su correo de Google. Si el correo no está registrado, no se concede el permiso.                      |
| RF-17  | Compartir checklist mediante enlace (url)         | Los usuarios pueden compartir una checklist mediante su enlace con otras personas.                                                                                   |
| RF-18  | Acceso mediante enlace compartido                 | Los usuarios pueden acceder a checklists mediante un enlace, solo si han sido agregados a la lista de acceso. Si no, se les redirige a la pantalla de inicio.        |
| RF-19  | Permisos para invitados de un checklist           | Hay dos tipos de permisos para invitados: colaboradores (pueden marcar tareas como completadas) y espectadores (solo pueden ver la lista).                          |
| RF-20  | Modificación de permisos o eliminación de usuarios | Los usuarios pueden cambiar permisos o eliminar a otros usuarios de una checklist compartida.                                                                        |
| RF-21  | Sincronización manual de cambios                  | Si dos personas ven una checklist, los cambios no se reflejan hasta que se recargue la página.                                                                      |
| RF-22  | Manejo de simultaneidad en completitud            | Si dos personas completan una tarea simultáneamente, solo se registra la primera. La segunda persona recibe un error y se recarga su vista.                         |

## Alcance

Nuestro sistema busca ser una herramienta útil para la realización de checklists en diversas actividades. Nos enfocamos en que el sistema sea sencillo e intuitivo, permitiendo a los usuarios asignar tareas y compartirlas fácilmente. El sistema no interfiere en la toma de decisiones, y cada checklist representa un conjunto de tareas descritas en lenguaje natural. Se usará exclusivamente a través de un sitio web.

Este proyecto se completará en 12 semanas desde la creación de este documento.

## Fuentes Bibliográficas

- Escribano, C. (2021, diciembre 13). Streaks, la app para mejorar nuestros hábitos está disponible para Mac. Applesfera. [https://www.applesfera.com](https://www.applesfera.com)
- Google Workspace. (n.d.). Shareable online calendar and scheduling - Google Calendar. Google Workspace. [https://workspace.google.com](https://workspace.google.com)
- ¿Qué es y cómo definir el alcance de un proyecto? Ejemplo y 5 pasos. (2024, June 7). Appvizer. [https://www.appvizer.es](https://www.appvizer.es)
- Microsoft to do. (s.f.). To Do. [https://to-do.office.com](https://to-do.office.com)
