// Datos para las cartas
const data = [
    {
        code: "Sombra",
        sanctions: [
            "Comportamiento poco tolerable, se pidio que dejara de ser tan pasivo-agresiva",
            "Interacciones poco proactivas, daba información pero luego ghosteaba y de forma reiterada se le intentaba integrar pero volvía al mismo ciclo",
            "Enviar contenido sin ningún tipo de contexto que se consideró, ya estas cucu compa (Tiro un comentario de mister jagger)"],
        description: "De esta persona se conoce poco pues la misma nunca fue muy sociable, lo que se sabe del recuerdo colectivo y los registros de conversación es que estudiaba en alguno de los ámbitos militares, tomaba el sistema publico de transporte y generalmente durante la espera es que tenia actividad en el discord del diagrama. Una de sus reds flags mas evidente fue admitir ser baneada de múltiples servidores",
        statBroma:"Se desconoce su sexo, se asume que no la ponía.",
        status: "Desconocido",
        serverErrors: "Sin errores",
        razonExpulsion: "Se removió del servidor bajo la normal ‘No nos apetece bancarte más’"
    },
    {
        code: "El de la Ex",
        sanctions: [
            "Insulto a un miembro querido, directamente se fue a lo basto indicando que era puta, una basura y demas",
            "Gaslighting, a un moderador",
            "Se sabe que tiene una denuncia judicial, o la tenia realmente"],
        description: "Esta persona, se conoce que era un tipo Europeo, se desconoce grandes descripciones de el pues era bastante poco frecuente, comenzó a pasarse por discord luego de terminar con la Ex, existe el recuerdo no confirmado que paso algo con su auto, también parece que el tenia un comportamiento abusivo con ella o al menos ambos miembros de la pareja no eran sanos.",
        statBroma:"Este literalmente la dejo de poner.",
        status: "Desaparecido",
        serverErrors: "No hubo error, se le baneo directamente",
        razonExpulsion: "Se removió del servidor bajo la normal ‘No nos apetece bancarte más’ y romper 'Mantener una actitud cordial y respetuosa.'"
    },
    {
        code: "El del Eclipse",
        sanctions: [
            "No colaborar en la dinámica de leer y escribir, solo escribió sus relatos y poco más. (Esto no es una infracción, pero da contexto de cómo se llegó a su retirada)",
            "Monopolizar charlas con sus propias historias, esto en contexto de compartir paso al menos 3 veces",
            "Menos preciar o hacer sentir incomodos a usuarios que escribían"],
        description: "El usuario es amable a grandes rasgos, no es mala persona y le gusta la escritura, hay un pequeño tinte de ego superior pero el mayor defecto es acaparar la atención desmedidamente, se le hablo varias veces no en instancias de “Vengo a moderar” a su vez el miembro era plenamente consciente de que eventualmente rompería la regla suficientes veces para tener una penalización importante, tengo el recuerdo claro y explicito en llamadas de voz de que lo dijo al menos dos veces.",
        statBroma:"La verdad tal vez si se paso de verga al pegarle un baneo, pero como se dijo en el reporte oficial de una comundad activa de 15 personas 10 estaban incomodos con él.",
        status: "Activo en territorios ajenos",
        serverErrors: "Mas claridad desde la administración, debimos haber hecho un tirón de orejas directamente, por favor ayúdanos reportando no esperen hasta que haya 10 personas que se sientan incomodas y no participen",
        razonExpulsion: "Se removió del servidor bajo la normal ‘No nos apetece bancarte más’ y romper 'Mantener una actitud cordial y respetuosa.'"
    },
    {
        code: "El pañales",
        sanctions: [
            "???"],
        description: "Humano?",
        statBroma:"No se, vino a preguntar si teniamos fetiche de adultos en pañales",
        status: "Desconocido",
        serverErrors: "Publicar el link de invitacion en cualquier parte",
        razonExpulsion: "No se le expulso, se fue solo ni nos dio tempo a decir gran cosa",
    },
    {
        code: "El Pibe Noticias",
        sanctions: [
            "Venir literalmente a acaparar la conversacion y no querer hacer amigos. (Es decir; interrumpia y solo le interesaba contar su historia)"
        ],
        description: "Adolesente, decia algo de noticias cada tanto, tenia un universo y no le gustaba warhammer. Posiblemente nunca toco un libro y no es ni acusacion, creo que leia cosas por arriba o consumia videos de lore, queria escribir y hablar de sus historia.",
        statBroma:"Se hablo con él y dejo de pasar por el servidor",
        status: "Desconocido",
        serverErrors: "No hubo",
        razonExpulsion: "Se fue solo",
    },
    {
        code: "El señor de los aliens",
        sanctions: [
            "Interrumpir y monopolizar charlas con teoria aliens (Realmente la parte de los aliens no es parte de la sanción pero le da un toque)"],
        description: "Hombre mayor con estudios en ingeniería, parece agradable a grandes rasgos, pero era muy creyente de las ideas de aliens y conspiraciones lo cual no es un problema, es hasta interesante. Un día llego tarde y estaban todos cansados por lo cual se despidieron para desconectarse, el comprendió que nadie quería hablar con la cosa que no era 100% real pues es verdad que a veces se ponía denso con el tema. El administrador Jab y un moderador de confianza fueron a hablar con el pero no hubo caso de que entendiera.",
        statBroma:"Es cierto que el hombre puso su queja en el canal general (Cosa que no va ahí) por lo cual se borro su mensaje no sin sacar captura previa y mandar el mensaje al canal de la administración para hablar del tema e intentar resolverlo.",
        status: "Activo en territorios ajenos, creo su propio server pero no tenemos conocidos que le fueran a visitar.",
        serverErrors: "Mas claridad desde la administración, debimos haber hecho un tirón de orejas directamente, por favor ayúdanos reportando no esperen hasta que haya 10 personas que se sientan incomodas y no participen",
        razonExpulsion: "",
    },
    {
        code: "Las victimas del sistema Yagger",
        sanctions: [
            "Hacer spoiler"],
        description: "Estas personas son desconocidos, durante el año 2023 el administrador Jab se dedico a configurar un sistema automatizado de seguridad en el discord pues estaba un poco hasta las bolas de que le llamaran de que entraban bots y también lo programo para que el servidor este seguro sin que el este pendiente. Durante alguna noche, cinco individuos entraron para hacer destripes del primer libro del archivo de las tormentas, en cuestión de segundos el primero de ellos fue automáticamente baneado, el resto se la pensaron un poco mas ante de tirar el comentario spoiler pues su broma se encontró con el pequeño problema de que bot estaba preparado para todo tipo de problemas asociados a spam.",
        statBroma:"Si nos reimos, encima de caer al unico servidor del cosmere con sistema de seguridad lo hicieron al que tenia a toda la moderacion hablando en canal de voz, nos reimos mucho.",
        status: "Desconocido",
        serverErrors: "No hubo",
        razonExpulsion: "Hacer spoiler y ser victimas del sistema automatizado",
    },
    {
        code: "La de que se pajeo",
        sanctions: [
            "Exparcir mentiras",
            "Acosar a un miembro del staff",],
        description: "Posiblemente humana y posiblemente mujer, fue un usuario poco activo dentro de todo, tras varios sucesos raros de explicar de relaciones sociales, esta persona intento tomar ventaja negando actividades que hizo e indicando que lo dicho por el miembro del staff era mentira, en su defensa mostro el registro de chat a medias (esto lo hizo voluntariamente) el acusado también mostro su chat y se encontraba la llamada de dos horas donde se dice que paso su código en clave, es importante indicar que se supone que la llamada nunca tuvo tintes sexuales, solo le pinto a la mina. Luego acoso al usuario de la moderación por su Instagram privado.",
        statBroma:"Ella misma dijo que se le habia baneado de otros servidores por estar promoyendo el conflicto.",
        status: "Desconocido",
        serverErrors: "No hubo",
        razonExpulsion: "Acosar a usuarios del servidor y bajo la normal ‘No nos apetece bancarte más’",
    },
    {
        code: "Kholinar",
        sanctions: [
            "Acoso",
            "Difamasión"],
        description: "Le desconocemos, no sabemos quien es realmente, pero sabemos que cuando veía a X usuario comenzaba a llamarla indiscriminadamente y colgar, hicimos el test de en un canal publico y otro no visible para todos, se confirmó que era él.",
        statBroma:"Por esta tipo, no me gusta que se den números de celular o grupos de wpp, este es de lejos el mas peligroso de los baneados.",
        status: "Desconocido",
        serverErrors: "No hubo",
        razonExpulsion: "Acosar a usuarios del servidor y bajo la normal ‘No nos apetece bancarte más’",
    },
    {
        code: "Acosador que me interrumpio mientras veia una pelicula",
        sanctions: [
            "Acoso"],
        description: "El vago venia persiguiendo a una mina desconocida de servidor en servidor exigiendo que la banearan, le pegamos el baneo a él. De la mina no sabemos nada más, esperamos este bien.",
        statBroma:"El flaco me dijo que era su novia, más o menos. Wtf? Te toca ir al psico bro.",
        status: "Desconocido",
        serverErrors: "No hubo",
        razonExpulsion: "Acosar a usuarios del servidor y bajo la normal ‘No nos apetece bancarte más’",
    },
    {
        code: "El Tristes",
        sanctions: [
            "Hablar de la relacion toxica que tiene con su ex y novia, esto no es un sancion pero intervenimos para saber que estaba sucediendo",
            "Desear el suicidio de usuarios del servidor"],
        description: "Es una persona, eso es evidente, ahora en rasgos tiene carisma y es amigable parece una persona muy simpática y divertida, pero tiene al menos una relación toxica con su ex, esta información es de 2023 aportada por El Cambia cuerpos y confirmadas por el mismo usuario. Su relación con la ex consiste en que ella lo debe tener bloqueado, le manda al menos mensaje cada día diciéndole buenos días, se a memorizado su número de teléfono, dirección y demás. En una ocasión se desato todo este enredo, hablamos con él y también resulta que tiene acordado tener una relación tocia con su pareja de ese momento. Como amigos, nos preocupamos por el y le pedimos que acuda a terapia o comenzar a tomar hábitos que le alejen del recuerdo de su ex, afirmo ser demasiado inteligente para que esos trucos funcionaran. Luego, volvió a entrar al servidor para desear que se suicide a un usuario del servidor como “bromita”.",
        statBroma:"Me hubiera gustado que no fuera una persona tan particular, era agradable hasta que le conocí más.",
        status: "En otras tierras",
        serverErrors: "No determinado",
        razonExpulsion: "Tengo entendido que no se le baneo, tuvo una conversaciones que da lastima a grandes rasgos y se fue solo",
        natEvent: true,
    },
    {
        code: "El Cambia Formas",
        sanctions: [
            "No cumplir en tiempo y forma con las charlas habladas, hablamos de que se le pregunto con mucho tiempo como queria la charla. Si publica o privada, publo o no publicidad etc (esto no es una sacion real pero justifica porque se le bajo de la moderacion)",
            "Durante el proyecto conjunto de servidores, se le indico que llevara y trayera info con los organizadores. A efectos practicos termino organizando lo minimo y dejando el proyecto en manos del resto miembros por los estudios, sin organizador se cayo todo. (esto no es una sacion real pero justifica porque se le bajo de la moderacion)",
            "Decir en bromita a alguien en crisis de ansiedad que se suicide"
        ],
        description: "Es una persona divertida, no sé qué más podría rodear sobre este. Es la principal persona de que El Tristes tuviera una intervención, cuando se le pregunto dijo que ante sus ojos el tipo podía matar a la ex y a sí mismo. Estuvo en la moderación baja del servidor durante un tiempo, ante una falta de claridad y compromiso le removió del puesto, una cosa es que tus estudios sean prioridad, otra es patear por dos semanas el estado de lo que estas haciendo.",
        statBroma:"No tengo un problema real con él, pero no le dejaría cerca de mis cosas.",
        status: "En otras tierras",
        serverErrors: "Falta de claridad ante lo que pasa tanto con él como con la victima.",
        razonExpulsion: "Se fue solo y sin hacer ruido, respetable",
        natEvent: true,
    },
    {
        code: "El Buitre",
        sanctions: [
            "Romper la regla de 'Jugar en los canales de voz general' (La verdad es que es pelotudez)"],
        description: "A grandes rasgos también es un humano, sabe de cocina y tiene una vida ocupada con el laburo a nivel de amistad el pibe chill parece buena onda y relativamente comprometido, pero cuando se interesa por una mina parece que va a full en algún punto se interesó por una miembro de la moderación, la cosa no salio y le agarro rencor, este mismo odio persiste hasta el día de hoy según comportamientos. Luego de estar ausente mas o menos tiempo, incumplido la norma de “No jugar en canales de voz” que eventualmente a mutado en “Si se van a poner a jugar y coordinar hablando por voz tapando una conversación que ya existe deben moverse a un canal de juegos” la sanción que dio la moderadora fueron varias horas por un primer strike, la moderadora era el mismo interés amoroso fracasado. En cuanto el resto de la administración se enteró de la situación se redujo la penalización a una hora o menos que a efectos prácticos era una anulación total de la penalización y se hizo que la moderadora pidiera disculpas.",
        statBroma:"La novia “La Bruja” también estuvo en este suceso, tuvo las mismas penalizaciones y disculpas que me hicieron estar durante dos horas o así, la puta que los pario. (Termino mal igual)",
        status: "En otras tierras",
        serverErrors: "Moderación novata o con estandares no coordinados por penalizaciones.",
        razonExpulsion: "Se fue solo y sin hacer ruido, respetable",
        natEvent: true,
    },
    {
        code: "La bruja (No es ataque, el apodo es similar)",
        sanctions: [
            "Comportamiento poco amable x3 'No agredir de manera directa o indirecta fuera del contexto de una broma.'"],
        description: "La persona era bastante buena tirando comentarios pasivo agresivos, esto se destaca al principio del ingreso en el servidor, luego se hablando un poco y retomo la actitud para con los miembros de la moderación tras la sanción el administrador y jab hablaron con esta persona en varios encuentros de forma privada para ver que pasaba y si bajaba los comentarios, pues ya en parte contaban con la aprobación de que la penalización que tenían era parcialmente injusta puesto que el tiempo de la misma era excesivo.",
        statBroma:"Uno de los argumentos mas fuertes que aportan en su defensa la moderadora ni siquiera les saludo, antes de darles la advertencia y sanción, la respuesta a esto y es lo mas probable es que en las llamadas de voz de discord el protocolo de comunicación tiene instantes mas o menos largos donde lo que dice el usuario no es enviado, esto se puede comprobar teniendo sonidos de ingreso, ocasionalmente si el internet no es bueno o tiene bost lag se tarda en escuchar el sonido de inicio. Esto no es una defensa para el tiempo, falta de cordialidad o lo que sea pero papá tenias a favor a la moderación entera con lo que paso, seguir insistiendo con comentarios jocosamente sarcásticos te gano que se empezara a dudar.",
        status: "En otras tierras",
        serverErrors: "Moderación novata o con estandares no coordinados por penalizaciones.",
        razonExpulsion: "Se fue solo y sin hacer ruido, respetable",
        natEvent: true,
    },
    {
        code: "El Valorant",
        sanctions: [
            "Primer dia e insultar a otro usuario de discord en llamada de voz"],
        description: "No se, lo trago el usuario llamado Fuego",
        statBroma:"Parece que de normal tenia mal perfil desde twitter",
        status: "Desconocido",
        serverErrors: "No hubo",
        razonExpulsion: "Mantener una actitud cordial y respetuosa.",
    },
    {
        code: "Fuego",
        sanctions: [
            "Acaparar conversación",
            "No utilizar los canales adecuadamente",
            "Principal spoileador del servidor, no lo hacia de mal pero esta la queja",
            "Mal uso o compromiso al tener permisos especiales en el servidor",
            "Literalmente causo la creacion de la norma para representantes de discord de 'No somos padres de nadie para revisar las cuentas y hacer seguimiento a lo dicen, pelean o postean, pero cuando son cuentas por donde llegan nuevos , eso significa predisponer a los nuevos lectores, integrantes o simplemente a gente de la red social implicada a que digan *este lugar o saga de libros es Machista/Misógina/Extrema de Y o Z*. Las redes sociales son *anónimas* pero no por ello hay que decir barbaridades, y menos cuando confiamos en esas personas para ayudar a los nuevos en su camino de lectura.'"],
        description: "Como persona puede tener buenas conversaciones en privado, en publico es recordado por tener un padre zoofílico y que cometía crímenes curiosos e inmorales, hablar de plátanos o la rueda del tiempo, fuera de estos tres temas es difícil obtener profundidad de personaje.",
        statBroma:"En general no entablamos amistad nunca, todos mis intentos fueron un fracaso así que desistí de conocerle.",
        status: "a su ritmo",
        serverErrors: "Esperar que comprenda lo signfica, relamente nunca hubo intención de colaborar como amigo pues tuvo muchas instancias de dialogo o espacios privadosp ara sus amigos, venia al servidor a hacer sus charlas fueran de bananas o de la rueda del tiempo, fuera e eso no se cayo 'Hola chicos, como estan? hace dos meses que no me paso'",
        razonExpulsion: "Se removió del servidor bajo la normal ‘No nos apetece bancarte más’ y es la unica excepcion para que si pueda volver cuando entienda que no nos gusta que siendo una cara del servidor vaya insultando por twiter",
    },
    {
        code: "El Velo Sobre la Realidad",
        sanctions: ["No hubo reporte alguno",],
        description: "Buena persona, pero con problemas o inseguridades con el ego, esta persona en concreto llega bastante cerca pues la admire durante mucho tiempo y estaba orgullosa de ella. Le gustaban varias sagas de libros famosas y de alguna forma es entre responsable a la vez que procrastina lo primero visto por mi lo segundo afirmado por ella. Durante su tiempo fuero de la moderación hablábamos y jugábamos, luego ingreso en la administración y colaboramos para crear una wiki visual de el archivo de las tormentas, en esta colaboración ella tenia por hobby escribir datos sobre los libros que le gustaban por lo cual surgió la idea de que transcribiera la info para que yo le diera un retoque visual. Durante el proyecto insisti en pagarle por la chamba, dejarle su @ en las publicaciones, también en más de una ocasión le indique que ella decidió sobre el orden de las infografías, la info que tenían y hasta podía indicar el diseño general, las únicas restricciones eran la cantidad de palabras. Siempre que se me pregunto sobre el proyecto o se me felicito les recordé que ella trabaja con la información y yo solo aplicaba un elemento visual.",
        statBroma:"Eventualmente, encontró diferencias en todo. Cada baneo, cada falta cometida en el servidor eran víctimas de una moderación agresiva y sorda ante ellos. Por ello decidió irse del servidor insultando y obviando que a rasgos reales tenia poder para pedir la modificación cosas o revisar que pasaba. Este cambio en la actitud paso luego de comenzar a hablar con un grupo de personas que se retiraron (El triste, El buitre, La bruja, El Cambia formas.) posterior mente a su retirada el entablar comunicación con ella implicaba que un mensaje sencillo tenia información criptica u oculta, por eso personalmente decidí que no se podía seguir hablando.",
        status: "En otras tierras",
        serverErrors: "No tengo la menor idea que se podria haber hecho, al menos yo si fue claro pero ella no.",
        razonExpulsion: "Se fue sola",
    },
];
