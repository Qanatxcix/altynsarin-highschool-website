"use strict";
const footer = {
      creating: document.createElement('footer'),
      class: ['text-muted',  'py-5'], //'fixed-bottom'
      container: {
            main: document.createElement('div'),
            class: 'container'
      },
      content: {
            paragraph: {
                  creating: document.createElement('p'),
                  class: [
                        'float-end',
                        'mb-1'
                  ],
                  specificCLasses: {
                        mbOne: 'mb-1',
                        mbZero: 'mb-0'
                  }
            },
            backToTop: {
                  creating: document.createElement('a'),
                  content: 'Жоғарыға көтерілу'
            }
      }
};

const creatingFooter = footer.creating;

function setClass(thisElement, classes) {
      for (let indx = 0; indx < classes.length; indx++ ) {
            thisElement.classList.add(`${classes[indx]}`);
      }
}

setClass(creatingFooter, footer.class);


const inFooterContainer = footer.container.main;
inFooterContainer.classList.add(footer.container.class);
inFooterContainer.style = "margin-bottom: 50px";
const paragraphs = {
      first: footer.content.paragraph.creating,
      second: footer.content.paragraph.creating
};

setClass(paragraphs.first, footer.content.paragraph.class);

const backToTop = footer.content.backToTop.creating;

backToTop.href = "#";

backToTop.textContent = footer.content.backToTop.content;

inFooterContainer.prepend(backToTop);

paragraphs.first.innerHTML = 'Сайтты құрастырған ИС-17-1 тобының студенті: <br> Дипломдық жобаның атауы:';
paragraphs.first.classList.add(footer.content.paragraph.specificCLasses.mbOne);

// paragraphs.second.textContent = 'Дипломдық жобаның атауы: ';
// paragraphs.second.classList.add(footer.content.paragraph.specificCLasses.mbZero);

backToTop.after(paragraphs.first);
backToTop.after(paragraphs.second);

creatingFooter.prepend(inFooterContainer);

creatingFooter.style = 'background-color: #241f63';


const selectedMainContainer = document.querySelector('.container.is-main');
selectedMainContainer.after(creatingFooter);