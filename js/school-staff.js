"use strict";

const subjects = {
      английский: 'Ағылшын тілі пәні мұғалімі',
      дш: 'Дене шынықтыру пәні мұғалімі',
      бейімдікғылымизауч: 'Ғылыми бейімділік орынбасары',
      жүйелікәкімші: 'Жүйелік әкімші',
      технология: 'Технология пәні мұғалімі',
      сызу: 'Сызу пәні мұғалімі',
      орыстілі: 'Орыс тілі және әдебиеті пәні мұғалімі',
      зауч: 'Орыбасар',
      Физика: 'Физика пәні мұғалімі',
      қазақтіліменәдебиетіпәнініңмұғалімі: 'Қазақ тілі және әдебиеті пәні мұғалімі',
      завучғылымиістержөніндегі: 'Ғылыми істер жөніндегі орынбасары',
      Окузавучы: 'Оқу орынбасары',
      сыныпмұғалімі: 'Сынып мұғалімі',
      бастауышсыныпмұғалімі: 'Бастауыш сынып мұғалімі',
      тарбиезавучы: 'Тәрбие орынбасары',
      психолог: 'Психолог',
      социолог: 'Социолог',
      құқық: 'Құқық пәні мұғалімі',
      физика: 'Физика пәні мұғалімі',
      мектепалдыдаярлықмугалими: 'Мектеп алды даярлық мұғалімі',
      биология: 'Биология пәні мұғалімі',
      химия: 'Химия пәні мұғалімі',
      алгебражәнегеометрия: 'Алгебра пәні мұғалімі',
      тарих: 'Қазақстан тарихы пәні мұғалімі',
      иодиректора: 'Директордың м.а. ',
      орыстіліжанетература: 'Орыс тілі және әдебиеті мұғалімі',
      кітапханашы: 'Кітапханашы',
      география: 'География',
      информатика: 'Информатика',
      математика: 'Математика пәні мұғалімі',
      аәд: 'АӘД',
      музыка: 'Музыка пәні мұғалімі',
      мад: 'МАД',
};

const personal = [{
            fullname: 'Абаканов Даурен Есимханулы',
            status: 'teacher',
            subj: subjects.английский,
            phoneNumber: 870234565434,
            email: 'daurend@gmail.com'
      },
      {
            fullname: 'Адамбекова Акерке Сембаевна',
            status: 'teacher',
            subj: subjects.дш,
            phoneNumber: 870788765647,
            email: 'akerke@mail.ru'
      },
      {
            fullname: 'Алимкулова Арайлым Махмутгазиевна',
            status: 'deputy',
            subj: subjects.бейімдікғылымизауч,
            phoneNumber: 870244858458,
            email: 'araily@gmail.com'
      },
      {
            fullname: 'Алимкулова Жанерке Кенжегазиевна',
            status: 'teacher',
            subj: subjects.английский,
            phoneNumber: 87018683454,
            email: 'jan_erke@gmail.com'
      },
      {
            fullname: 'Амангелдиев Қошемет Қайратұлы',
            status: 'deputy',
            subj: subjects.жүйелікәкімші,
            phoneNumber: 87026849435,
            email: 'qoshemet@gmail.com'
      },
      {
            fullname: 'Амантаев Марат Жолдыбаевич',
            status: 'teacher',
            subj: [subjects.технология, subjects.сызу],
            phoneNumber: 87015469484,
            email: 'marattt@gmail.com'
      },
      {
            fullname: 'Амирова Анара Жанеркеевна',
            status: 'teacher',
            subj: subjects.бастауышсыныпмұғалімі,
            phoneNumber: 87025698443,
            email: 'anaratt@gmail.com'
      },
      {
            fullname: 'Амирова Разия Хихметовна',
            status: 'teacher',
            subj: subjects.орыстілі,
            phoneNumber: 87015869485,
            email: 'razzy_name@gmail.com'
      },
      {
            fullname: 'Асылбекова Жанар Мухаммедовна',
            status: 'teacher',
            subj: subjects.бастауышсыныпмұғалімі,
            phoneNumber: 87074649849,
            email: 'jannara@gmail@gmail.com'
      },
      {
            fullname: 'Асылбекова Жанила Абдрашовна',
            status: 'teacher',
            subj: subjects.Физика,
            phoneNumber: 87024586494,
            email: 'jannylla@gmail.com'
      },
      {
            fullname: 'Ахметжанова Нургуль Зекенкызы',
            status: 'teacher',
            subj: subjects.бастауышсыныпмұғалімі,
            phoneNumber: 87014789574,
            email: 'nurflower@mail.ru'
      },
      {
            fullname: 'Базылова Алтынай Еркиновна',
            status: 'teacher',
            subj: subjects.қазақтіліменәдебиетіпәнініңмұғалімі,
            phoneNumber: 87025669569,
            email: 'goldmoon@gmail.com'
      },
      {
            fullname: 'Байкенова Молдир Болаткызы',
            status: 'teacher',
            subj: subjects.бастауышсыныпмұғалімі,
            phoneNumber: 87014569485,
            email: 'clearryy@gmail.com'
      },
      {
            fullname: 'Байтанасова Гульвира Медетовна',
            status: 'teacher',
            subj: subjects.бастауышсыныпмұғалімі,
            phoneNumber: 87025969495,
            email: 'flow_vira@gmail.com'
      },
      {
            fullname: 'Бакаев Дат Бактыгалиевич',
            status: 'deputy',
            subj: subjects.завучғылымиістержөніндегі,
            phoneNumber: 87015468949,
            email: 'dottaa123@gmail.com'
      },
      {
            fullname: 'Бекишева Рауана Онгарбековна',
            status: 'deputy',
            subj: [subjects.зауч, subjects.психолог],
            phoneNumber: 87075674747,
            email: 'rauanna@gmail.com'
      },
      {
            fullname: 'Бижанова Бахытгуль Кадыкеновна',
            status: 'teacher',
            subj: subjects.бастауышсыныпмұғалімі,
            phoneNumber: 87024656454,
            email: 'happyflower@gmail.com'
      },
      {
            fullname: 'Бокенова Жулдызай Жанатовна',
            status: 'teacher',
            subj: subjects.биология,
            phoneNumber: 87014747483,
            email: 'moonstar@mail.ru'
      },
      {
            fullname: 'Болтекеева Фариза Шакишевна',
            status: 'teacher',
            subj: subjects.дш,
            phoneNumber: 87075674758,
            email: 'farizok@gmail.com'
      },
      {
            fullname: 'Бөлкенбаев Ануар Жұмагелдиевич',
            status: 'deputy',
            subj: subjects.тарбиезавучы,
            phoneNumber: 87025645784,
            email: 'anvarrr@gmail.com'
      },
      {
            fullname: 'Даткина Арайлым Абдрахманкызы',
            status: 'teacher',
            subj: subjects.бастауышсыныпмұғалімі,
            phoneNumber: 87012343435,
            email: 'arailymnd@gmail.com'
      },
      {
            fullname: 'Елубаева Айжан Муканкызы',
            status: 'deputy',
            subj: [subjects.тарбиезавучы, subjects.тарих],
            phoneNumber: 87024584845,
            email: 'moonsoul@gmail.com'
      },
      {
            fullname: 'Ерикова Мадина Ерикқызы',
            status: 'psycho',
            subj: subjects.психолог,
            phoneNumber: 87024758484,
            email: 'madin@gmail.com'
      },
      {
            fullname: 'Жақсыбекова Ардақ Кенжеқызы',
            status: 'teacher',
            subj: subjects.бастауышсыныпмұғалімі,
            phoneNumber: 87045848584,
            email: 'areduck@gmail.com'
      },
      {
            fullname: 'Жанарбек Меруерт Жанарбекқызы',
            status: 'teacher',
            subj: subjects.қазақтіліменәдебиетіпәнініңмұғалімі,
            phoneNumber: 87035867589,
            email: 'meruertta@gmail.com'
      },
      {
            fullname: 'Жексенбекова Жанар Тлеукаримовна',
            status: 'teacher',
            subj: subjects.алгебражәнегеометрия,
            phoneNumber: 87057454744,
            email: 'janar@gmail.com'
      },
      {
            fullname: 'Исатаева Алмагуль Сериковна',
            status: 'social',
            subj: subjects.социолог,
            phoneNumber: 87027548584,
            email: 'anappleflower@gmail.com'
      },
      {
            fullname: 'Калимбетова Толкын Кожабергеновна',
            status: 'teacher',
            subj: [subjects.тарих, subjects.құқық],
            phoneNumber: 87014756457,
            email: 'tolqyn@mail.ru'
      },
      {
            fullname: 'Кантарбеков Казкен Кабдырович',
            status: 'teacher',
            subj: [subjects.психолог, subjects.бастауышсыныпмұғалімі],
            phoneNumber: 87024354555,
            email: 'qazken@gmail.com'
      },
      {
            fullname: 'Косыбаева Айжанат Ерболовна',
            status: 'teacher',
            subj: subjects.английский,
            phoneNumber: 87773454556,
            email: 'aijannat@gmail.com'
      },
      {
            fullname: 'Куанышбекова Панар Мейрамбековна',
            status: 'teacher',
            subj: subjects.Физика,
            phoneNumber: 87776655453,
            email: 'panare@mail.ru'
      },
      {
            fullname: 'Кузембай Жазира Егинтайкызы',
            status: 'teacher',
            subj: subjects.дш,
            phoneNumber: 87773454543,
            email: 'jazyra@gmail.com'
      },
      {
            fullname: 'Қосыбаев Құрмет Қайратұлы',
            status: 'teacher',
            subj: subjects.мектепалдыдаярлықмугалими,
            phoneNumber: 87763455633,
            email: 'qurmetti@gmail.com'
      },
      {
            fullname: 'Малтабарова Айгерім Ерденқызы',
            status: 'teacher',
            subj: subjects.биология,
            phoneNumber: 87764534567,
            email: 'aigera@gmail.com'
      },
      {
            fullname: 'Мейрманова Бакытгул Байызкызы',
            status: 'teacher',
            subj: [subjects.тарих, subjects.құқық],
            phoneNumber: 87024565744,
            email: 'gulhappiness@gmail.com'
      },
      {
            fullname: 'Мустафина Гулбагила Ыкыласовна',
            status: 'teacher',
            subj: subjects.химия,
            phoneNumber: 87027574573,
            email: 'bugilla@gmail.com'
      },
      {
            fullname: 'Мыкышева Жумакуль Карибеккызы',
            status: 'teacher',
            subj: subjects.дш,
            phoneNumber: 87676567475,
            email: 'friflowe@gmail.com'
      },
      {
            fullname: 'Нокин Еркебулан Берикович',
            status: 'teacher',
            subj: subjects.алгебражәнегеометрия,
            phoneNumber: 87754345654,
            email: 'erkebull_an@gmail.com'
      },
      {
            fullname: 'Омашева Дарибала Койбагаровна',
            status: 'teacher',
            subj: subjects.қазақтіліменәдебиетіпәнініңмұғалімі,
            phoneNumber: 87755065054,
            email: 'acidboy'
      },
      {
            fullname: 'Рашитова Жанна Елеуовна',
            status: 'teacher',
            subj: subjects.тарих,
            phoneNumber: 87765433456,
            email: 'jannnaaa@mail.ru'
      },
      {
            fullname: 'Сагындыкова Айгерим Жангазыевна',
            status: 'teacher',
            subj: subjects.қазақтіліменәдебиетіпәнініңмұғалімі,
            phoneNumber: 87713456785,
            email: 'yougerim@gmail.com'
      },
      {
            fullname: 'Сағындықова Гульмира Аманқұлқызы',
            status: 'deputy',
            subj: subjects.иодиректора,
            phoneNumber: 87071235432,
            email: 'worldflower@gmail.com'
      },
      {
            fullname: 'Садибекова Алтын Медетбековна',
            status: 'teacher',
            subj: subjects.орыстіліжанетература,
            phoneNumber: 87773457869,
            email: 'goldy@mail.ru'
      },
      {
            fullname: 'Садуакас Қаламқас Жұмағалииқызы',
            status: 'teacher',
            subj: subjects.кітапханашы,
            phoneNumber: 87774534563,
            email: 'applepen@gmail.com'
      },
      {
            fullname: 'Серікбаева Арайлым Серікбайқызы',
            status: 'teacher',
            subj: subjects.география,
            phoneNumber: 87785674556,
            email: 'arailym26@gmail.com'
      },
      {
            fullname: 'Сулейменова Айнагуль Закариевна',
            status: 'teacher',
            subj: subjects.информатика,
            phoneNumber: 87024563445,
            email: 'flowerwind@gmail.com'
      },
      {
            fullname: 'Сыздыкова Сайранкуль Салимовна',
            status: 'teacher',
            subj: [subjects.информатика, subjects.математика],
            phoneNumber: 87026785677,
            email: 'sairanflow@gmail.com'
      },
      {
            fullname: 'Темирбеков Нурбек Жамантаевич',
            status: 'teacher',
            subj: [subjects.технология, subjects.сызу],
            phoneNumber: 87023456754,
            email: 'nurrbekqql@gmail.com'
      },
      {
            fullname: 'Тлеуберлина Гулсим Токушовна',
            status: 'teacher',
            subj: subjects.технология,
            phoneNumber: 87019087686,
            email: 'esim@gmail.com'
      },
      {
            fullname: 'Тоимбекова Айнагуль Казкеновна',
            status: 'teacher',
            subj: subjects.информатика,
            phoneNumber: 87074563242,
            email: 'wolflowrr@gmail.com'
      },
      {
            fullname: 'Тойынбеков Жанат Алгазинович',
            status: 'teacher',
            subj: subjects.аәд,
            phoneNumber: 87713454323,
            email: 'soulname@gmail.com'
      },
      {
            fullname: 'Толепбергенов Канат Туякбаевич',
            status: 'teacher',
            subj: subjects.музыка,
            phoneNumber: 87754566878,
            email: 'bloodname@gmail.com'
      },
      {
            fullname: 'Толеукенова Баян Самбетовна',
            status: 'teacher',
            subj: subjects.мад,
            phoneNumber: 877534235676,
            email: 'pianoo@gmail.com'
      },
      {
            fullname: 'Шайзадаев Данияр Тойкожаевич',
            status: 'teacher',
            subj: subjects.дш,
            phoneNumber: 807233443456,
            email: 'danny@gmail.com'
      }
];

const allTeachers = [], 
      allDeputes = [];


function sorting(thisEmployee, sortingItem) {
      personal.forEach(item => {
            if (item.status == sortingItem) {
                  thisEmployee.push(item);
            }
      });
}

sorting(allTeachers, 'teacher');
sorting(allDeputes, 'deputy');

