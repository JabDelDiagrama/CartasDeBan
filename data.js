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
        sanctions: ["Insulto a un miembro querido, directamente se fue a lo basto indicando que era puta, una basura y demas"],
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
            "Acoso"],
        description: "Le desconocemos, no sabemos quien es realmente, pero sabemos que cuando veía a X usuario comenzaba a llamarla indiscriminadamente y colgar, hicimos el test de en un canal publico y otro no visible para todos, se confirmó que era él.",
        statBroma:"Por esta tipo, no me gusta que se den números de celular o grupos de wpp, este es de lejos el mas peligroso de los baneados.",
        status: "Desconocido",
        serverErrors: "No hubo",
        razonExpulsion: "Acosar a usuarios del servidor y bajo la normal ‘No nos apetece bancarte más’",
    },
    {
        code: "Acosar que me interrumpio mientras veia una pelicula",
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
            "Indico que tenia problemas con su ex desde hace varios años, especificamente que manda un mensaje al dia cada manaña y ella debe tenerle bloqueado",
            "Entrar al servidor, luego de irse voluntariamente solo para decir `Ojala te suicides` a un usuario del servidor"],
        description: "Humano, posiblemente, amigable. Esta persona participo dentro de la moderacion, en concreto de los helpers lugar que siempre ha tenido lugar para sugerir y acompañar proyecto",
        status: "Activo",
        serverErrors: "Insistir en lo que significa ser responsable para otros, no llevar el problema con claridad"
    },
    {
        code: "La multi cuentas",
        sanctions: [
            "Multicuentas, y hablar en su multicuentas acaparando la charla en el canal general o donde pintara"],
        description: "Humano, posiblemente, amigable. Esta persona participo dentro de la moderacion, en concreto de los helpers lugar que siempre ha tenido lugar para sugerir y acompañar proyecto",
        status: "Desconocido",
        serverErrors: "Parece haber recapacitado"
    },
];
