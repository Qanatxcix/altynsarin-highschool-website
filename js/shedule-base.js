"use strict";

const subjectkz = {
      primarySchool: {
            sauatAshu: 'Сауат ашу',
            kaz: 'Қазақ тілі',
            kazLiter: 'Әдебиеттік оқу',
            rus: 'Орыс тілі',
            english: 'Ағылшын тілі',
            math: 'Математика',
            physCulture: 'Дене шынықтыру',
            nature: 'Жаратылыстану',
            worldview: 'Дүниетану',
            rusEng: 'Орыс тілі/Ағылшын тілі',
      },
      highSchool: {
            kaz: 'Қазақ тілі',
            kazLiter: 'Қазақ әдебиеті',
            rus: 'Орыс тілі',
            rusLiter: 'Орыс әдебиеті',
            rusEng: 'орыс тілі/ағылшын тілі',
            history: 'Қазақстан тарихы',
            math: 'Математика',
            DJT: 'ДЖТ',
            physCulture: 'Дене шыныктыру',
            nature: 'Жаратылыстану',
            algebra: 'Алгебра',
            biology: 'Биология',
            phys: 'Физика',
            english: 'Ағылшын',
            geometry: 'Геометрия',
            chemis: 'Химия',
            geograph: 'География',
            basicsoflaw: 'Құқық негіздері'
      }
};



const shedule = {
      class1: [
            { //monday
                  classA: [
                        subjectkz.primarySchool.sauatAshu , 
                        subjectkz.primarySchool.english , 
                        subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.nature, 
                        '', '' 
                  ],
                  classB: [
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.english, 
                        subjectkz.primarySchool.rus, 
                        '', '' 
                  ]
            },
            { //tuesday
                  classA: [
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.english, subjectkz.primarySchool.rus, 
                        '', '' 
                  ],
                  classB: [
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.english, 
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.nature, 
                        '', ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.sauatAshu, 
                        subjectkz.primarySchool.math, subjectkz.primarySchool.nature, 
                        '', '' 
                  ],
                  classB: [
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.sauatAshu, 
                        subjectkz.primarySchool.math, subjectkz.primarySchool.nature, 
                        '', '' 
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.math, subjectkz.primarySchool.rus, 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.physCulture, 
                        '', ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.rus, subjectkz.primarySchool.math, 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.rus, 
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.math, 
                        '', ''
                  ]
            }
      ],
      class2: [
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.rus, 
                        '', ''  
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.physCulture,
                        subjectkz.primarySchool.rus,
                        '', ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.english, subjectkz.primarySchool.rus, 
                        '', '' 
                  ],
                  classB: [
                        subjectkz.primarySchool.math, subjectkz.primarySchool.english, 
                        subjectkz.primarySchool.rus, subjectkz.primarySchool.kaz, 
                        '', '' 
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.kazLiter, 
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.nature, 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.math, subjectkz.primarySchool.nature, 
                        '', ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.rus , 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.math, subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.rus, subjectkz.primarySchool.kazLiter, 
                        '', ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.english, subjectkz.primarySchool.worldview, 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.worldview, 
                        '', '' 
                  ]
            }
      ],
      class3: [
            {
                  classA: [
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.rusEng, 
                        subjectkz.primarySchool.rusEng, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.worldview, '' 
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.nature, 
                        '', ''  
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.nature, subjectkz.primarySchool.physCulture, 
                        '', '' 
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.rus, subjectkz.primarySchool.math, 
                        '', '' 
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.kazLiter, 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math,
                        subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.kazLiter, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.rusEng, subjectkz.primarySchool.rusEng, 
                        subjectkz.primarySchool.nature, '' 
                  ],
                  classB: [
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.worldview, 
                        '', ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.physCulture, 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.math, subjectkz.primarySchool.rus, 
                        subjectkz.primarySchool.english, ''
                  ]
            }
      ],
      class4: [
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.english, subjectkz.primarySchool.kazLiter, 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.english,
                        '', '' 
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.math, subjectkz.primarySchool.nature, 
                        subjectkz.primarySchool.rus, ''
                  ],
                  classB: [
                        subjectkz.primarySchool.physCulture, 
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.rus, 
                        '', '' 
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.english, 
                        '', '' 
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.nature, 
                        '', ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.english, 
                        '', ''
                  ],
                  classB: [
                        subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.nature, 
                        subjectkz.primarySchool.english, 
                        ''
                  ]
            },
            {
                  classA: [
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.math, 
                        subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.nature, 
                        subjectkz.rus, ''
                  ],
                  classB: [
                        subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, 
                        subjectkz.primarySchool.physCulture, subjectkz.primarySchool.nature, 
                        subjectkz.primarySchool.rus, ''
                  ]
            }
      ],
      class5: [
            {
                  classA: [
                        subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.history, 
                        subjectkz.highSchool.math, subjectkz.highSchool.kaz, 
                        '' 
                  ],
                  classB: [
                        subjectkz.highSchool.english, subjectkz.highSchool.rus, subjectkz.highSchool.math, 
                        subjectkz.highSchool.history, 
                        subjectkz.highSchool.kaz, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.DJT, subjectkz.highSchool.math, 
                        subjectkz.highSchool.physCulture, '', ''
                  ],
                  classB: [
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.kazLiter, subjectkz.highSchool.math,
                        subjectkz.highSchool.DJT, '', ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.math, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng,
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.kaz, ''
                  ],
                  classB: [
                        subjectkz.highSchool.english, subjectkz.highSchool.rus, subjectkz.highSchool.math,
                        subjectkz.highSchool.kaz, subjectkz.highSchool.physCulture, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.history, subjectkz.highSchool.math, subjectkz.highSchool.nature, 
                        subjectkz.highSchool.kazLiter,
                        subjectkz.highSchool.physCulture, ''
                  ],
                  classB: [
                        subjectkz.highSchool.nature, subjectkz.highSchool.history, subjectkz.highSchool.math,
                        subjectkz.highSchool.rus, subjectkz.highSchool.kazLiter, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.math,
                        subjectkz.highSchool.kaz, subjectkz.highSchool.nature, ''
                  ],
                  classB: [
                        subjectkz.highSchool.kaz, subjectkz.highSchool.math, subjectkz.highSchool.nature,
                        subjectkz.highSchool.english, subjectkz.highSchool.physCulture, ''
                  ]
            }
      ],
      class6: [
            {
                  classA: [
                        subjectkz.highSchool.rus, subjectkz.highSchool.math, subjectkz.highSchool.kaz, 
                        subjectkz.highSchool.history, 
                        subjectkz.highSchool.physCulture, 
                        ''
                  ],
                  classB: [
                        subjectkz.highSchool.math, subjectkz.highSchool.rus, subjectkz.highSchool.history, 
                        subjectkz.highSchool.kaz,
                         subjectkz.highSchool.physCulture, 
                        ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.nature, subjectkz.highSchool.kazLiter, subjectkz.highSchool.english,
                        subjectkz.highSchool.math, '', ''
                  ],
                  classB: [
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.nature, subjectkz.highSchool.math,
                        subjectkz.highSchool.english, subjectkz.highSchool.physCulture, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.kaz, subjectkz.highSchool.english, subjectkz.highSchool.DJT,
                        subjectkz.highSchool.math, '', ''
                  ],
                  classB: [
                        subjectkz.highSchool.english, subjectkz.highSchool.kaz, subjectkz.highSchool.math,
                        subjectkz.highSchool.DJT, subjectkz.highSchool.rus, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.nature, subjectkz.highSchool.math, 
                        subjectkz.highSchool.history, subjectkz.highSchool.physCulture, ''
                  ],
                  classB: [
                        subjectkz.highSchool.nature, subjectkz.highSchool.kazLiter,
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.math, subjectkz.highSchool.history,
                        ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.math, subjectkz.highSchool.rus, subjectkz.highSchool.rus,
                        subjectkz.highSchool.kaz, subjectkz.highSchool.physCulture, subjectkz.highSchool.english
                  ],
                  classB: [
                        subjectkz.highSchool.english, subjectkz.highSchool.math, subjectkz.highSchool.kaz, 
                        subjectkz.highSchool.rus, '', ''
                  ]
            }
      ],
      class7: [
            {
                  classA: [
                        subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.phys, 
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.kaz, 
                        subjectkz.highSchool.english
                  ],
                  classB: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.algebra, subjectkz.highSchool.biology, 
                        subjectkz.highSchool.kaz, subjectkz.highSchool.english, 
                        subjectkz.highSchool.physCulture
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.history, subjectkz.highSchool.rus, subjectkz.highSchool.geometry,
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.english, subjectkz.highSchool.physCulture
                  ],
                  classB: [
                        subjectkz.highSchool.rus, subjectkz.highSchool.geometry, subjectkz.highSchool.history,
                        subjectkz.highSchool.english, subjectkz.highSchool.kazLiter, subjectkz.highSchool.physCulture
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.chemis, subjectkz.highSchool.algebra,
                        subjectkz.highSchool.kaz, subjectkz.highSchool.biology, subjectkz.highSchool.geograph
                  ],
                  classB: [
                        subjectkz.highSchool.english, subjectkz.highSchool.algebra, subjectkz.highSchool.geograph,
                        subjectkz.highSchool.biology, subjectkz.highSchool.kaz, subjectkz.highSchool.chemis
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.geometry, subjectkz.highSchool.rus, subjectkz.highSchool.DJT,
                        subjectkz.highSchool.geograph, subjectkz.highSchool.kazLiter, ''
                  ],
                  classB: [
                        subjectkz.highSchool.rus, subjectkz.highSchool.DJT, subjectkz.highSchool.geometry,
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.geograph, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.history, subjectkz.highSchool.kaz, subjectkz.highSchool.english,
                        subjectkz.highSchool.algebra,
                        subjectkz.highSchool.rus, subjectkz.highSchool.physCulture
                  ],
                  classB: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra,
                        subjectkz.highSchool.rus, subjectkz.highSchool.history, subjectkz.highSchool.physCulture 
                  ]
            }
      ],
      class8: [
            {
                  classA: [
                        subjectkz.highSchool.history, subjectkz.highSchool.rusEng, 
                        subjectkz.highSchool.rusEng, subjectkz.highSchool.algebra, 
                        subjectkz.highSchool.geograph, subjectkz.highSchool.kaz
                  ],
                  classB: [
                        subjectkz.highSchool.algebra, subjectkz.highSchool.kaz, subjectkz.highSchool.history, 
                        subjectkz.highSchool.geograph, subjectkz.highSchool.rus, subjectkz.highSchool.physCulture
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.DJT, subjectkz.highSchool.kazLiter,
                        subjectkz.highSchool.geometry, subjectkz.highSchool.biology, subjectkz.highSchool.physCulture
                  ],
                  classB: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.biology,  subjectkz.highSchool.chemis,
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.geometry, subjectkz.highSchool.english
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.algebra, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng,
                        subjectkz.highSchool.chemis, subjectkz.highSchool.geograph, subjectkz.highSchool.kaz
                  ],
                  classB: [
                        subjectkz.highSchool.geograph, subjectkz.highSchool.algebra, subjectkz.highSchool.kaz, 
                        subjectkz.highSchool.rus, subjectkz.highSchool.DJT, subjectkz.highSchool.english
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.history, subjectkz.highSchool.geometry,
                        subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.physCulture
                  ],
                  classB: [
                        subjectkz.highSchool.geometry, subjectkz.highSchool.kazLiter, subjectkz.highSchool.rus,
                        subjectkz.highSchool.phys, subjectkz.highSchool.history, subjectkz.highSchool.physCulture
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.biology, subjectkz.highSchool.kazLiter,
                        subjectkz.highSchool.algebra, subjectkz.highSchool.physCulture, ''
                  ],
                  classB: [
                        subjectkz.highSchool.chemis, subjectkz.highSchool.kazLiter, subjectkz.highSchool.algebra,
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.biology, subjectkz.highSchool.english
                  ]
            }
      ],
      class9: [
            {
                  classA: [
                        subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.history, 
                        subjectkz.highSchool.geograph, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng
                  ],
                  classB: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, 
                        subjectkz.highSchool.history, subjectkz.highSchool.chemis, subjectkz.highSchool.physCulture 
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.geometry, subjectkz.highSchool.geograph, subjectkz.highSchool.biology,
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.DJT, subjectkz.highSchool.physCulture
                  ],
                  classB: [
                        subjectkz.highSchool.geometry, subjectkz.highSchool.biology,  subjectkz.highSchool.kazLiter,
                        subjectkz.highSchool.DJT,  subjectkz.highSchool.physCulture,  subjectkz.highSchool.rus
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.phys, 
                        subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.physCulture
                  ],
                  classB: [
                        subjectkz.highSchool.algebra, subjectkz.highSchool.chemis, subjectkz.highSchool.kaz,
                        subjectkz.highSchool.biology, subjectkz.highSchool.physCulture, subjectkz.highSchool.english 
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.geometry, subjectkz.highSchool.chemis, subjectkz.highSchool.history,
                        subjectkz.highSchool.phys, subjectkz.highSchool.physCulture, subjectkz.highSchool.kazLiter
                  ],
                  classB: [
                        subjectkz.highSchool.history, subjectkz.highSchool.english, subjectkz.highSchool.kazLiter,
                        subjectkz.highSchool.geometry, subjectkz.highSchool.geograph, subjectkz.highSchool.rus
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.chemis,
                        subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.kazLiter
                  ],
                  classB: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.algebra, subjectkz.highSchool.english,
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.geograph,
                        subjectkz.highSchool.rus
                  ]
            }
      ],
      class10: [
            {
                  classA: [
                        subjectkz.highSchool.history, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra,
                        subjectkz.highSchool.phys, subjectkz.highSchool.biology, subjectkz.highSchool.physCulture
                  ],
                  classB: [
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.history, subjectkz.highSchool.kaz, 
                        subjectkz.highSchool.algebra, subjectkz.highSchool.phys, subjectkz.highSchool.DJT
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.english,  subjectkz.highSchool.rus,  subjectkz.highSchool.phys,
                        subjectkz.highSchool.geometry, subjectkz.highSchool.kazLiter, ''
                  ],
                  classB: [
                        subjectkz.highSchool.geometry, subjectkz.highSchool.DJT, subjectkz.highSchool.rus, 
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.english, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.phys,
                        subjectkz.highSchool.history, subjectkz.highSchool.physCulture, ''
                  ],
                  classB: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.kaz, subjectkz.highSchool.history,
                        subjectkz.highSchool.algebra, subjectkz.highSchool.DJT, subjectkz.highSchool.basicsoflaw
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.rus, subjectkz.highSchool.biology,
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.geometry, subjectkz.highSchool.english
                  ],
                  classB: [
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.kazLiter, subjectkz.highSchool.rus,
                        subjectkz.highSchool.algebra, subjectkz.highSchool.english, subjectkz.highSchool.basicsoflaw
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.algebra, subjectkz.highSchool.algebra, subjectkz.highSchool.biology,
                        subjectkz.highSchool.english, subjectkz.highSchool.physCulture, ''
                  ],
                  classB: [
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.basicsoflaw, 
                        subjectkz.highSchool.english,  subjectkz.highSchool.kazLiter, '', '' 
                  ]
            },
      ],
      class11: [
            {
                  classA: [
                        subjectkz.highSchool.history, subjectkz.highSchool.algebra, subjectkz.highSchool.kazLiter,
                        subjectkz.highSchool.english, subjectkz.highSchool.biology, subjectkz.highSchool.physCulture
                  ],
                  classB: [
                        subjectkz.highSchool.chemis, subjectkz.highSchool.history, subjectkz.highSchool.basicsoflaw,
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.algebra, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.geometry, subjectkz.highSchool.phys, subjectkz.highSchool.rus,
                        subjectkz.highSchool.biology, subjectkz.highSchool.kazLiter, ''
                  ],
                  classB: [
                        subjectkz.highSchool.kazLiter, subjectkz.highSchool.geometry, subjectkz.highSchool.english,
                        subjectkz.highSchool.basicsoflaw, subjectkz.highSchool.rus, subjectkz.highSchool.DJT
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.phys, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra,
                        subjectkz.highSchool.algebra, subjectkz.highSchool.physCulture, ''
                  ],
                  classB: [
                        subjectkz.highSchool.english, subjectkz.highSchool.history, subjectkz.highSchool.physCulture,
                        subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, ''
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.geometry, subjectkz.highSchool.phys, subjectkz.highSchool.english,
                        subjectkz.highSchool.biology, subjectkz.highSchool.rus, ''
                  ],
                  classB: [
                        subjectkz.highSchool.english, subjectkz.highSchool.algebra,
                        subjectkz.highSchool.rus, subjectkz.highSchool.kazLiter, subjectkz.highSchool.physCulture,
                        subjectkz.highSchool.DJT
                  ]
            },
            {
                  classA: [
                        subjectkz.highSchool.history, subjectkz.highSchool.algebra, subjectkz.highSchool.biology,
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.phys, subjectkz.highSchool.english
                  ],
                  classB: [
                        subjectkz.highSchool.physCulture, subjectkz.highSchool.phys, subjectkz.highSchool.basicsoflaw,
                        subjectkz.highSchool.DJT, subjectkz.highSchool.kaz, ''
                  ]
            }
      ]
};

// function getCurrentDayShedule(thisWeekDay) {
//       for (let indx in thisWeekDay) {
//            console.log(thisWeekDay[indx]);
//       }
// }
// getCurrentDayShedule(shedule.Monday);

const dayAIDs = ['dayA1', 'dayA2', 'dayA3', 'dayA4', 'dayA5'];
const dayBIDs = ['dayB1', 'dayB2', 'dayB3', 'dayB4', 'dayB5'];

// for (let indx = 0; indx < shedule.Monday.length; indx++ ) {
//       for (let indxIn = 0; indxIn < shedule.Monday[indx].classA.length; indxIn++ ){
//             console.log(shedule.Monday[indx].classA[indxIn].toString());
//       }
// }
// shedule.Monday.forEach((currDay, i) => {
//       currDay.classA.forEach(item => {
//       });          
// });

function showCurrentAClassShedule(currClass) {
      currClass.forEach( (currDay, i) => {
            let thisLiContent = '';
            currDay.classA.forEach(item => {
                  thisLiContent += 
                  `<li class="list-group-item d-flex d-xl-flex justify-content-center align-items-center 
                        justify-content-xl-center align-items-xl-center" 
                        style="padding: 8px 20px;width: 200px;
                        padding-right: 0px;padding-left: 0px;padding-top: 4px;
                        padding-bottom: 4px;height: 34px;">
                  <span style="font-size: 14px;">${item}</span>
                  </li>`;
            });
            document.getElementById(`${dayAIDs[i]}`).innerHTML = thisLiContent; 
      });
}


function showCurrentBClassShedule(currClass) {
      currClass.forEach( (currDay, i) => {
            let thisLiContent = '';
            currDay.classB.forEach(item => {
                  thisLiContent += 
                  `<li class="list-group-item d-flex d-xl-flex justify-content-center align-items-center 
                        justify-content-xl-center align-items-xl-center" 
                        style="padding: 8px 20px;width: 200px;
                        padding-right: 0px;padding-left: 0px;padding-top: 4px;
                        padding-bottom: 4px;height: 34px;">
                  <span style="font-size: 14px;">${item}</span>
                  </li>`;
            });
            document.getElementById(`${dayBIDs[i]}`).innerHTML = thisLiContent; 
      });
}



function currAClassParagraph(currClass) {
      document.getElementById('currAclassParagraph').innerHTML = 
                              `<p style="font-size: 16px">${currClass} A сынып оқушыларының сабақ кестесі</p>`;
}


function currBClassParagraph(currClass) {
      document.getElementById('currBclassParagraph').innerHTML = 
                              `<p style="font-size: 16px">${currClass} B сынып оқушыларының сабақ кестесі</p>`;
}



showCurrentAClassShedule(shedule.class1);
showCurrentBClassShedule(shedule.class1);
currAClassParagraph(1);
currBClassParagraph(1);

console.log(document.getElementById('day1').innerHTML);

