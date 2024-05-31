var config = {
    style: 'mapbox://styles/ivan-ortiz9/cldc6xr83001i01s087ube9np',
    accessToken: 'pk.eyJ1IjoiaXZhbi1vcnRpejkiLCJhIjoiY2xkYjU1OWMxMHBiNTN2cm9jMTVrNDNrbSJ9.Ty2Dv3ZlIwdeSEmqpmRiqg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'La ruta del teléfono de Julio César Mondragón antes y después de su asesinato',
    subtitle: '',
    byline: 'Texto: Ivan Ortiz y Fernando González | Visualización: Ivan Ortiz',
    footer: 'Con información del libro <i> La Guerra que nos ocultan</i>, de  Félix Santana, Miguel Ángel Alvarado y Francisco Cruz. <br> Esta visualización fue creada usando la plantilla <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'introduccion',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'Logo_Corriente_Alterna.png',
            description: '<b>El teléfono de Julio César Mondragón se mantuvo activo meses después de su asesinato y sostuvo 31 comunicaciones con 15 teléfonos diferentes entre el 27 de septiembre de 2014 y el 4 de abril de 2015. Varios de ellos se ubicaban cerca y al interior del Campo militar 1 y del Centro de Investigación y Seguridad Nacional (Cisen), durante estas actividades. <br> <br>Corriente Alterna tuvo acceso a esta sábana de llamadas y siguió la ruta de estos contactos y lo contrastó con el nuevo informe de la Comisión de la Verdad.</b>',
            location: {
                center: [-99.07916, 18.05431],
                zoom: 7.47,
                pitch: 30.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'ubicaciones',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 //{
                    // layer: 'areas',
                     //opacity: 0
                 //}
            ]
        },
        {
            id: 'primer-capitulo',
            alignment: 'right',
            hidden: false,
            title: 'Salida de Ayotzinapa',
            image: '',
            description: '<b>26 de septiembre de 2014 | 17:30 hrs </b> <br> <br> Un grupo de 100 estudiantes, casi todos de primer año como Julio César, salen de la normal de Ayotzinapa, en Tixtla, Guerrero, con el fin de secuestrar camiones que usarán para acudir a la marcha del 2 de octubre, en la Ciudad de México. A esa hora Julio activó sus datos móviles y se ubicaba a 1 km de la normal. <br> <br> Los normalistas parten con dirección a Chilpancingo en dos camiones. Julio sube al Estrella de Oro 1531 con aproximadamente otros 30 compañeros. No tienen éxito, así que se dirigen hacia la ciudad de Iguala. ',
            location: {
                center: [-99.40083329941102, 17.568116946614257],
                zoom: 11.90,
                pitch: 68,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'jcmf-linea1',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 //{
                     //layer: 'jcmf-puntos',
                     //opacity: 0
                 //}
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Rancho del Cura',
            image: '',
            description: '<b>26 de septiembre de 2014 | 20:17 </b> <br> <br> Los estudiantes llegan al Rancho del Cura, cerca de Iguala. Ahí realizan boteos para juntar dinero y nuevamente intentan tomar un camión. Julio se conecta a la antena El Calvario, en Tepecoacuilco, para comunicarse con su pareja Marisa. "Estamos esperando que pase un autobús para secuestrarlo y juntando piedras para defendernos de los policías", escribe por mensaje. <br> <br>Los normalistas toman el autobús Costa Line 5213. Como tiene pasajeros, acuerdan con el chofer dejarlos en una Central de Autobuses Estrella Blanca, en Iguala. Sin embargo, los chófer deja encerrados dentro del vehículo y ellos inmediatamente piden ayuda a sus compañeros. Tras escuchar la llamada de auxilio, Julio César se dirige a la ciudad.',
            location: {
                center: [-99.36622, 17.84313],
                zoom: 9.65,
                pitch: 60,
                bearing: 0.0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Los normalistas toman tres camiones y salen de Iguala',
            image: '',
            description: '<b>26 de septiembre de 2014 | 21:23 hrs</b> <br> <br> Los estudiantes llegan a la Central de Autobuses Estrella Blanca, en el centro de Iguala. Ayudan a sus compañeros retenidos y deciden tomar tres camiones. Mientras, Julio se conecta a internet. Los normalistas salen de Iguala en dos grupos: Dos camiones por el sur y tres por el norte. En este último grupo va Julio César, a bordo del Costa Line 2012. <br> <br>Los tres camiones se trasladan por la calle Galeana, que después se convierte en Juan Alvárez. Para este punto, el C4, el 27 Batallón de Infantería y la Secretaría de Seguridad Pública de Guerrero están monitoreando en tiempo real los movimientos de los estudiantes. ',
            location: {
                center: [-99.54129639066363, 18.339979486871663],
                zoom: 17.0,
                pitch: 55.68,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Comienza la Noche de Iguala',
            image: '',
            description: '<b>26 de septiembre de 2014 | 21:27 </b> <br> <br>En su camino por el zócalo de la ciudad, camionetas y patrullas detienen el camión de Julio César. Algunos estudiantes bajan, armados con piedras y palos, para cuestionar la causa de su detención. Pero los policías municipales responden abriendo fuego. <br> <br>Julio César le escribe a Marisa a las 21:27, "están disparando, amor". Ella le responde a las 21:32. "Vete de ese lugar". "No puedo irme, mis compañeros están en peligro", contesta. Los autobuses donde van los estudiantes avanzan abriéndose paso entre los disparos de los policías.',
            location: {
                center: [-99.54022, 18.34402],
                zoom: 17.0,
                pitch: 55.68,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'quinto-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Ataque en Periférico y Juan Álvarez',
            image: '',
            description: '<b>26 de septiembre de 2014 | 21:53 - 22:34 hrs </b> <br> <br>Alguien deja una patrulla en el cruce entre Juan Álvarez y Periférico Norte e impide a los estudiantes escapar de Iguala. Algunos de ellos salen a mover el vehículo; pero son atacados a tiros por policías. El normalista Aldo Gutiérrez recibe un disparo en la cabeza y termina en coma. <br> <br>Los jóvenes salen, se refugian entre los camiones y llaman por auxilio a otros compañeros y ambulancias. Durante el tiroteo, que dura más de media hora, Julio socorre a un compañero que sufre una crisis asmática. Advirtiendo la muerte, se despide de Marisa y de su hija. <br> <br>Al final del ataque, secuestran y desaparecen a 21 normalistas que iban a bordo del Estrella de Oro 1568. A través del C-4, la policía estatal y el Ejército tienen conocimiento de estos hechos.',
            location: {
                center: [-99.53612, 18.35744],
                zoom: 17.0,
                pitch: 55.68,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sexto-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Julio graba con su teléfono la agresión',
            image: '',
            description: 'La CNDH y el GIEI señalan que testigos sobrevivientes de la noche de Iguala, declararon que Julio César Mondragón grabó con su teléfono las agresiones del ataque en la calle de Juan Álvarez, durante la noche de Iguala. No obstante la PGR en 2018 desestimó esta posibilidad ante una supuesta falta de evidencias, pese a que sus propios documentos contradicen a la Procuraduría.',
            location: {
                center: [-99.53612, 18.35744],
                zoom: 16.5,
                pitch: 55.68,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'septimo-capitulo',
            alignment: 'right',
            hidden: false,
            title: 'Tortura y asesinato de Julio César',
            image: '',
            description: '<b>27 de septiembre de 2014 | 00:15 - 02:45 hrs, según CoVAJ y CNDH</b> <br> <br>Sobre el mismo cruce de Juan Alvarez y Periférico, los normalistas sobrevivientes y otros más que llegaron en auxilio realizan una conferencia de prensa sobre lo sucedido. Sin embargo a las 0:15 del 27 de septiembre comienza un segundo ataque y dos estudiantes son asesinados a tiros: Julio César Ramírez y Daniel Solís. Julio César Mondragón huye de los disparos; pero es interceptado y secuestrado. <br> <br>En el Camino del Andariego, a medio kilómetro del lugar donde fue secuestrado y del C4 de Iguala, Julio César es torturado de manera despiadada hasta su muerte. Lo golpearon hasta fracturarle 40 huesos de su cuerpo. Mientras se resistía a morir, le despojaron uno de sus ojos y el resto de rostro le fue arrebatado con una violencia sádica.',
            location: {
                center: [-99.53065, 18.35762],
                zoom: 16.5,
                pitch: 63.5,
                bearing: -25.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'octavo-capitulo',
            alignment: 'right',
            hidden: false,
            title: 'Cerca de la Normal de Amilcingo',
            image: '',
            description: '<b>27 de septiembre de 2014 | 00:57 - 13:10 hrs</b> <br> <br>Entre el 27 y el 28 de septiembre de 2014, cuatro números se comunicaron con la persona que robó el teléfono de Julio César. El primero de ellos mantuvo una conversación vía mensajes de texto durante el 27 de septiembre. Entre las 0:57 y las 13:10 horas este número envió 5 mensajes, todos fueron respondidos. <br> <br>En ese momento  el teléfono se encontraba cerca de la Normal Rural General "Emiliano Zapata". Este número no se volvió a enlazar nuevamente con el teléfono de Julio.',
            location: {
                center: [-98.76182588964866, 18.729996412531953],
                zoom: 9.0,
                pitch: 5.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'noveno-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Entre Teconoapa y El Pericón',
            image: '',
            description: '<b>27 de septiembre de 2014 | 12:45 hrs</b> <br> <br>Otro número tiene una llamada de 17 segundos con el teléfono de Julio César. La llamada proviene de algún sitio ubicado entre los pueblos de Tecoanapa y El Pericón, a 150 km de Iguala. Es el único registro de comunicación de este número.',
            location: {
                center: [-100.05954, 17.51420],
                zoom: 8.20,
                pitch: 28.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-capitulo',
            alignment: 'right',
            hidden: false,
            title: 'En el centro de Tláhuac, CDMX',
            image: '',
            description: '<b>28 de septiembre de 2014 | 16:12 hrs</b> <br> <br>Un cuarto número habla con el teléfono robado. La antena a la que se enlazó este número, durante la llamada de 12 segundos, se localiza en la colonia San Sebastián, cerca del centro de la alcaldía Tláhuac, CDMX. Es el único registro de este número en la sábana de llamadas.',
            location: {
                center: [-98.81786, 18.75081],
                zoom: 8.75,
                pitch: 28.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-primer-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Llamada en Huamuchapa',
            image: '',
            description: '<b>28 de septiembre de 2014 | 20:59 hrs</b> <br> <br>Un quinto número marca y mantiene una llamada de 63 segundos con el teléfono de Julio César. El número se encontraba en el poblado de Huamuchapa, Guerrero, a 8 kilómetros de Xalpatláhuac, de donde era originario Jorge Luis González Parral. Aunque está persona no estaba registrada en la sábana de llamadas anteriormente, volvería a comunicarse con el teléfono de Julio César un año después.',
            location: {
                center: [-99.90280, 17.50422],
                zoom: 8.4,
                pitch: 40.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-segundo-capitulo',
            alignment: 'right',
            hidden: false,
            title: 'Única pista del ladrón',
            image: '',
            description: '<b>30 de septiembre de 2014 | 18:58 hrs</b> <br> <br>El 29 de septiembre, a las 16:00 hrs, la persona que robó el teléfono recibe una llamada del número 1111. Es el servicio al cliente de Telcel y sirve para conocer información de un número, dar de alta o baja una línea, etc. Ese mismo día, los familiares de Julio regresan con su cuerpo a su hogar, en San Miguel Tecomatlán, Estado de México. <br> <br>Al día siguiente, el número de Julio se conecta a internet durante poco más de 15 minutos, revelando por primera y última vez la ubicación del dispositivo. En ese momento el ladrón se enlaza a la antena El Calvario, en Tepecoacuilco, Guerrero. Es la misma antena a la que se enlazó Julio el 26 de septiembre, antes de entrar a Iguala.',
            location: {
                center: [-99.40743, 18.31202],
                zoom: 11.0,
                pitch: 25.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                     layer: 'cap12',
                     opacity: 1,
                     duration: 5000
                    }
                 ],
            onChapterExit: [
                    {
                     layer: 'cap2',
                     opacity: 0
                    }
            ]
        },
        {
            id: 'decimo-tercer-capitulo',
            alignment: 'right',
            hidden: false,
            title: '¿Quién robó el teléfono de Julio?',
            image: '',
            description: '<b>30 de septiembre de 2014 | 18:58 hrs</b> <br> <br>La conexión a internet se registró con un diferente código IMEI. Este código es la huella digital de un dispositivo móvil. De acuerdo con Félix Santana y con el GIEI, esto significa que para el 30 septiembre el chip del teléfono de Julio se había introducido en otro teléfono. <br> <br>La Comisión por la Verdad y Acceso a la Justicia del Caso Ayotzinapa (CoVAJ) en su informe de agosto del 2022 identifica al dueño de este teléfono como Rodolfo N, quién sería el presunto ladrón del teléfono del normalista y el responsable de cambiar el chip del número de Julio Cesar a su propio dispositivo. <br> <br>Según la CoVAJ, Rodolfo N mantiene comunicaciones directas (antes y después del 26 de septiembre) con Gabriel N "la Gaby" y Eduardo N "El Choky", integrantes de Guerreros Unidos. Así como con el militar Eduardo N, actualmente preso por el caso Ayotzinapa e investigado bajo los delitos de desaparición forzada y delincuencia organizada.',
            location: {
                center: [-99.45343, 18.31183],
                zoom: 12.35,
                pitch: 25.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-cuarto-capitulo',
            alignment: 'right',
            hidden: false,
            title: 'Contactos desde el Cisen',
            image: '',
            description: '<b>17 al 19 de octubre de 2014</b> <br> <br>Dos semanas después del cambio de chip, el ladrón se comunica con cuatro números ubicados cerca del Centro Nacional de Inteligencia y Seguridad Nacional (Cisen). <br> <br>Las siguientes comunicaciones fueron omitidas por la Comisión de la Verdad en su informe; pese a que su secretario técnico, Félix Santana, las reveló años atrás.',
            location: {
                center: [-98.81620, 18.79942],
                zoom: 8.3,
                pitch: 20.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-quinto-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Contactos desde el Cisen',
            image: '',
            description: '<b>17 de octubre de 2014 | 13:09 - 16:21 hrs</b> <br> <br>El 17 de octubre, el número terminación 3974 envía un mensaje al número robado de Julio a las 13:09 hrs. Más tarde, a las 16:21 hrs el número con terminación 4229 le envía otro mensaje. Ambos mensajes fueron respondidos por el ladrón del teléfono.',
            location: {
                center: [-99.23801, 19.30410],
                zoom: 16.8,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-sexto-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Contactos desde el Cisen',
            image: '',
            description: '<b>18 de octubre de 2014 | 9:35 hrs - 19 de octubre de 2014 | 11:27 hrs</b> <br> <br>Al día siguiente, el número terminación 3626 tiene una llamada de 5 segundos de duración con el ladrón a las 9:35 hrs. Finalmente, el ladrón recibe y responde un mensaje del número terminación 8524 a las 11:27 hrs del 19 de octubre. Durante las comunicaciones, todos estos números se enlazaron a una antena ubicada a 20 metros de una entrada del Cisen.',
            location: {
                center: [-99.23806828204738, 19.30436261274112],
                zoom: 18.0,
                pitch: 60.62,
                bearing: 130.33
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-septimo-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'A la puerta del Campo Militar Núm. 1',
            image: '',
            description: '<b>21 de octubre de 2014 | 11:58</b> <br> <br>Un par de días después a las comunicaciones desde el Cisen, el ladrón chatea con cinco números diferentes, ubicados dentro o a las afueras del Campo Militar 1. El primero de ellos, el terminación 5164, envía un mensaje al número robado a las 11:58 hrs del 21 de octubre. <br> <br>Dicho teléfono se enlaza a una antena ubicada en la calle Lázaro Cárdenas, en la colonia Ricardo Flores Magón del municipio de Naucalpan de Juárez, Estado de México. La antena se encuentra a menos de 200 metros de la Puerta 4 del Campo Militar 1. El ladrón del teléfono responde el mensaje con otro suyo.',
            location: {
                center: [-99.25069, 19.44105],
                zoom: 13.7,
                pitch: 0.0,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-octavo-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Una antena dentro del Campo Militar',
            image: '',
            description: '<b>23 de octubre de 2014 | 14:24 - 27 de octubre de 2014 | 10:00</b> <br> <br>A las 14:24 hrs del 23 de octubre el mismo número terminación 5164 chatea nuevamente con el ladrón del teléfono; pero ahora se conecta a otra antena, dentro del Campo Militar 1. La torre de comunicaciones se ubica al sur del Campo Militar, cerca de la Puerta 4 y 100 metros de los Batallones de Infantería 103 y 104. <br> <br>Dos días después, el número terminación 5625 chatea con el número robado de Julio a las 10:01 hrs. Y el 27 de octubre de 2021 a las 10:00 hrs otro número se chatea con el de Julio, el terminación 6680. Ambos teléfonos se enlazaron a la antena del Campo Militar 1 cuando se comunicaron con el ladrón.',
            location: {
                center: [-99.23899718974177, 19.437304695156175],
                zoom: 14.7,
                pitch: 46.50,
                bearing: -7.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'decimo-noveno-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Desde el Campo Militar Núm. 1',
            image: '',
            description: '<b>2 de noviembre de 2014 | 17:45 - 1 de diciembre de 2014 | 11:40</b> <br> <br>El número terminación 5625 chatea otra vez con el ladrón del teléfono; pero ahora se conecta la antena de Lázaro Cárdenas, a las afueras del Campo Militar 1. A esa antena también se conecta a las 14:46 hrs del 8 de noviembre el número que termina en 8717 para chatear con el número robado. <br> <br>Finalmente, el número con terminación 5210 se conecta dentro del Campo Militar 1 para chatear con el ladrón del teléfono de Julio. El secretario técnico de la CoVAJ, Félix Santana, y el periodista Miguel Alvarado en 2015 llaman a este número desde la oficina del entonces senador Alejandro Encinas, con el fin de verificar si seguía operando la línea.',
            location: {
                center: [-99.24699527558157, 19.432803674419755],
                zoom: 14.7,
                pitch: 52.50,
                bearing: -0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vigesimo-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Últimas comunicaciones con el Cisen',
            image: '',
            description: '<b>2 de abril 2015 | 21:19 - 4 de abril de 2015 | 15:41</b> <br> <br>Las últimas dos comunicaciones del teléfono de Julio César tienen lugar en abril de 2015. El 2 de dicho mes a las 21:19 hrs se establece contacto a través de mensajes de texto con el número terminación 3974. La misma situación se repite el 4 de abril pero con el número terminación 8524. <br> <br>En ambas ocasiones los números que se enlazan al telefóno del normalista se conectan a la antena que se encuentra a 20 metros de la entrada del Cisen.',
            location: {
                center: [-99.23801, 19.30410],
                zoom: 16.65,
                pitch: 53.0,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vigesimo-primer-capitulo',
            alignment: 'left',
            hidden: false,
            title: 'Un teléfono vuelve a comunicarse con el número robado',
            image: '',
            description: '<b>3 de marzo 2015 | 12:32</b> <br> <br>El número que marcó al teléfono robado el 28 de septiembre de 2014 vuelve a comunicarse una vez más, ahora mediante un mensaje que fue respondido. El número se encontraba en el poblado de Xalpatláhuac, Guerrero.',
            location: {
                center: [-100.00000, 17.83580],
                zoom: 7.75,
                pitch: 49.19,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
