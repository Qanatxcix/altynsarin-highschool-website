"use strict";

const cardObject = {
    card: {
        creating: document.createElement('div'),
        class: ['card'],
        style: ['width: 62rem;']
    }
}

const weeksKAZ = [
    'Дүйсенбіге арналған ас мәзірі',
    'Сейсенбіге арналған ас мәзірі',
    'Сәрсенбіге арналған ас мәзірі',
    'Бейсенбіге арналған ас мәзірі',
    'Жұмаға арналған ас мәзірі',
    'Сенбіге арналған ас мәзірі',
]

function setCurrentWeek(currentWeek, pastingTag) {
    let cardHTML = '';
    document.getElementById(pastingTag).innerHTML = '';
    for (let index = 0; index < currentWeek.length; index++) {
        for (let inIndex = 0; inIndex < currentWeek[index].length; inIndex++ ) {
            let thisIngredients = [];
            for (let indx = 0; indx < currentWeek[index][inIndex].ingredients.length; indx++ ) {
                thisIngredients.push(currentWeek[index][inIndex].ingredients[indx]) ;
            }   cardHTML = 
                `<div class="card" id="day-${index + 1}" style="width: 62rem; margin-top: 20px">
                    <div class="card-body">
                        <div class="row">
                                <div class="col-7" style="margin-top: auto; margin-bottom: auto;">
                                <h6 style="text-align: start;" class="card-title">${weeksKAZ[index]}</h6> <br>    
                                    <h5 style="text-align: justify;" class="card-title">${inIndex + 1}. ${currentWeek[index][inIndex].name}</h5> 
                                    <hr>
                                    <h6 class="card-subtitle mb-2 text-muted">Тағамның құрамы</h6>
                                    <p class="card-text" style="text-align: justify;">
                                        ${thisIngredients.join(', ')}
                                    </p>
                            </div>
                            <div class="col-5" style="margin-top: -8px; margin-bottom: -8px; ">
                                    <img src="${currentWeek[index][inIndex].img}" width="392px" height="210px" alt="">
                                </div>
                        </div>
                    </div>
                </div>`;
            document.getElementById(pastingTag).innerHTML += cardHTML;
        }
    }
}

    setCurrentWeek(weeklyMenu.secondWeek, 'second-week');
// setCurrentWeek(weeklyMenu.thirdWeek, 'third-week');
// setCurrentWeek(weeklyMenu.fourthWeek, 'fourth-week');
