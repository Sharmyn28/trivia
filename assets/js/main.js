'use strict';

const character = [
    {
        name: 'history',
        url: 'assets/img/history.png',
        question: 'What was the name of the diplomatic war between USA and USSR?',
        answer1: 'Cold War',
        answer2: 'World War',
        answer3: 'American Revolutionary War'
    },
    {
        name: 'science',
        url: 'assets/img/science.png',
        question: 'Which of these is NOT a subatomic particle?',
        answer1: 'Leuctron',
        answer2: 'Electron',
        answer3: 'Neutron'
    },
    {
        name: 'geography',
        url: 'assets/img/geography.png',
        question: 'Nova Scotia is part of which country?',
        answer1: 'Canada',
        answer2: 'United Kingdom',
        answer3: 'United States of America'
    },
    {
        name: 'king',
        url: 'assets/img/king.png',
        question: 'Who is Bruce Wayne?',
        answer1: 'Batman',
        answer2: 'Superman',
        answer3: 'Green Lantern'
    },
    {
        name: 'enterteiment',
        url: 'assets/img/enterteiment.png',
        question: 'What is the name of Mickey Mouse pet?',
        answer1: 'Pluto',
        answer2: 'Goofy',
        answer3: 'Donald'
    },
    {
        name: 'art',
        url: 'assets/img/art.png',
        question: 'Where is the painting the "Mona Lisa" displayed?',
        answer1: 'Louvre Museum',
        answer2: 'The Museum Of Modern Art',
        answer3: 'Vatican Museums'
    },
    {
        name: 'sports',
        url: 'assets/img/sports.png',
        question: 'Who won Best Player at the 2014 FIFA World Cup held in Brazil?',
        answer1: 'Lionel Messi',
        answer2: 'Cristiano Ronaldo',
        answer3: 'Thomas Müller'
    }        
];

const app = {
    
    answers: [],
    init: function() {
        app.changeCoverPage();
        app.setup();
    },

    setup: function () {
        $('.spinner').on('click', app.clickHandler);
        $('.btn').on('clack', app.saveUserAnswer);
    },

    changeCoverPage : function() {
        setTimeout(function(){
            //$('#coverPage').addClass("invisible");
            //$('#coverPage').attr('hidden');
            //$('#content').removeAttr('hidden');
            $('#roulette').removeAttr('hidden');
        },2500);
    },

    showQuestion: function(character) {
        $('#question_div').empty();
        let question = `<h5 id="question" class="text-center">${character.question}</h5>`
        let answer = `<div class="d-flex row align-items-center col-4"><button id='${character.answer1}' class ='btn'>${character.answer1}</button> \
                        <button id='${character.answer2}' class ='btn'>${character.answer2}</button> \
                        <button id='${character.answer3}' class ='btn'>${character.answer3}</button> </div>`
        $('#question_div').append(question, answer); 
    },
    
    clickHandler: function() {
        $('.spinner').off('click');
        $('.spinner span').hide();
        $r.spin().done(function(character) {
            console.log(character.name);
            $('.spinner').on('click', app.clickHandler);
            $('.spinner span').show();
            app.showQuestion(character);
            console.log(character.question + ' : '+ character.answer1);
            $('#content').removeAttr('hidden');
        });
    },

    saveUserAnswer : function () {
        app.answers.push({
            question: character.question,
            answer: $('button').click((e)=>{
                return e.target.id
            })
        });
        //localStorage.clear();
        localStorage.setItem(character.question, character.answer1);
        $('#question_div').empty();
        console.log(localStorage);
        console.log(app.answers);
    }

}
$(document).ready(app.init);
let $r = $('.roulette').fortune(character);
