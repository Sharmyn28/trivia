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
    
    init: function() {
        app.changeCoverPage();
        app.setup();
    },

    setup: function () {
        $('.spinner').on('click', app.clickHandler);

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
        let question = `<h5 id="question">'${character.question}'</h5>`
        let answer1 = `<button id='${character.answer1}'>${character.answer1}</button>`
        let answer2 = `<button id='${character.answer2}'>${character.answer2}</button>`
        let answer3 = `<button id='${character.answer3}'>${character.answer3}</button>`
        $('#question_div').append(question, answer1, answer2, answer3); 
    },
    
    clickHandler: function() {
        $('.spinner').off('click');
        $('.spinner span').hide();
        $r.spin().done(function(character) {
            console.log(character.name);
            $('.spinner').on('click', app.clickHandler);
            $('.spinner span').show();
            app.showQuestion(character);
            /*let question = `<h5 id="question">'${character.question}'</h5>`
            let answer1 = `<button id='${character.answer1}'>${character.answer1}</button>`
            let answer2 = `<button id='${character.answer2}'>${character.answer2}</button>`
            let answer3 = `<button id='${character.answer3}'>${character.answer3}</button>`
            $('#question_div').append(question, answer1, answer2, answer3);*/
            console.log(character.question + ' : '+ character.answer1);
            $('#content').removeAttr('hidden');
        });
    }
}
$(document).ready(app.init);
let $r = $('.roulette').fortune(character);


/*const app  = {
    item :  {
        name: undefined,
        comment: undefined
    },
    init : function () {
        app.item.name = $('#name');
        app.item.comment = $('#comment');

        app.setup ();
        app.showPrevComments ();
    },

    setup: function () {
        $('#btn_add').click (app.addComment) ;
        $('#btn_clear').click (app.clearComments) ;
    },

    saveData: function(){
        localStorage.setItem(app.item.name.val(), app.item.comment.val());
        console.log(localStorage);
    },

    addComment: function (event) {
        $('#ale').append ( `<div class='coment'><p class= 'name'><strong> ${app.item.name.val()}</strong> \
                            <br> ${app.item.comment.val()} </p></div>`);
        app.saveData();
        app.item.name.val('');
        app.item.comment.val('');
    },

    clearComments: function (event) {
        $('#ale').empty();
        localStorage.clear();
        console.log(localStorage);
    },

    showPrevComments: function(){
        $.each(localStorage, function (index, value) {
            $('#ale').append( `<div class='coment'><p class= 'name'><strong> ${index}</strong> \
                                <br> ${value} </p></div>`);
        });
    }
};

$(document).ready (app.init);*/