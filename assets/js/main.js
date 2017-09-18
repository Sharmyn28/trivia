'use strict';

const character = [
    {
        name: 'history',
        url: 'assets/img/history1.png',
        question: 'What was the name of the diplomatic war between USA and USSR?',
        answer1: 'Cold War',
        answer2: 'World War',
        answer3: 'American Revolutionary War',
        correctAnswer: 'Cold War'
    },
    {
        name: 'science',
        url: 'assets/img/science1.png',
        question: 'Which of these is NOT a subatomic particle?',
        answer1: 'Leuctron',
        answer2: 'Electron',
        answer3: 'Neutron',
        correctAnswer: 'Leuctron'
    },
    {
        name: 'geography',
        url: 'assets/img/geography1.png',
        question: 'Nova Scotia is part of which country?',
        answer1: 'United States of America',
        answer2: 'United Kingdom',
        answer3: 'Canada',
        correctAnswer: 'Canada'
    },
    {
        name: 'king',
        url: 'assets/img/king.png',
        question: 'Who is Bruce Wayne?',
        answer1: 'Superman',
        answer2: 'Batman',
        answer3: 'Green Lantern',
        correctAnswer: 'Batman'
    },
    {
        name: 'enterteiment',
        url: 'assets/img/enterteiment.png',
        question: 'What is the name of Mickey Mouse pet?',
        answer1: 'Donald',
        answer2: 'Goofy',
        answer3: 'Pluto',
        correctAnswer: 'Pluto'
    },
    {
        name: 'art',
        url: 'assets/img/art1.png',
        question: 'Where is the painting the "Mona Lisa" displayed?',
        answer1: 'Vatican Museums',
        answer2: 'Louvre Museum',
        answer3: 'The Museum Of Modern Art',
        correctAnswer: 'Louvre Museum'
    },
    {
        name: 'sports',
        url: 'assets/img/sport1.png',
        question: 'Who won Best Player at the 2014 FIFA World Cup held in Brazil?',
        answer1: 'Cristiano Ronaldo',
        answer2: 'Lionel Messi',
        answer3: 'Thomas Müller',
        correctAnswer: 'Lionel Messi',
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
        //$('.btn').on('click', app.saveUserAnswer());
    },

    changeCoverPage : function() {
        setTimeout(function(){
            //$('#coverPage').addClass("invisible");
            //$('#coverPage').attr('hidden');
            $('#roulette').removeAttr('hidden');
        },2500);
    },

    showQuestion: function(character) {
        $('#content').empty();
        let question = `<h5 id="question" class="text-center">${character.question}</h5>`
        let img = `<img src='${character.url}' class='d-flex row align-items-center col-3 img_character'>`
        let answer = `<button id='${character.answer1}' class ='btn' onclick='app.saveUserAnswer(this)'>${character.answer1}</button> \
                        <button id='${character.answer2}' class ='btn' onclick='app.saveUserAnswer(this)'>${character.answer2}</button> \
                        <button id='${character.answer3}' class ='btn' onclick='app.saveUserAnswer(this)'>${character.answer3}</button>`
        $('#content').append(question, img, answer);
    },
    
    clickHandler: function() {
        $('.spinner').off('click');
        $('.spinner span').hide();
        $r.spin().done(function(character) {
            console.log(character.name);
            $('.spinner').on('click', app.clickHandler);
            $('.spinner span').show();
            app.showQuestion(character);
            console.log(character.question + ' : '+ character.correctAnswer);
            $('#content').removeAttr('hidden');
        });
    },

    saveUserAnswer : function (event) {
        app.answers.push({
            question: event.parentNode.firstChild.textContent,
            answer: event.textContent            
        });

        app.correctAnswer();
        $('#content').empty();
        console.log(app.answers);
    },

    correctAnswer : function(){
        let length = app.answers.length - 1;
        $.each(character, function (index, value) {
            $.each(app.answers, function(i, v){
                if(app.answers[length].question == value.question){
                    if(app.answers[length].answer == value.correctAnswer){
                        swal('Congrats!','Correct Answer','success');
                        return true;
                    }else{
                        swal('Ooops! Incorrect Answer','Keep trying','error');
                        return false;
                    }
                }
            });
        });
    }

}
$(document).ready(app.init);
let $r = $('.roulette').fortune(character);
