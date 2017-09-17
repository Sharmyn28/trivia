
const character = [
    {
        name: 'history',
        url: 'assets/img/history.png',
        question: undefined,
        answer: undefined,
    },
    {
        name: 'science',
        url: 'assets/img/science.png',
        question: undefined,
        answer: undefined,
    },
    {
        name: 'geography',
        url: 'assets/img/geography.png',
        question: 'Holaaa',
        answer: undefined,
    },
    {
        name: 'king',
        url: 'assets/img/geography.png',
        question: 'Holaaa',
        answer: undefined,
    },
    {
        name: 'enterteiment',
        url: 'assets/img/enterteiment.png',
        question: undefined,
        answer: undefined,
    },
    {
        name: 'art',
        url: 'assets/img/art.png',
        question: undefined,
        answer: undefined,
    },
    {
        name: 'sports',
        url: 'assets/img/sports.png',
        question: undefined,
        answer: undefined,
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
            $('#coverPage').addClass("invisible");
            //$('#coverPage').attr('hidden');
            $('#content').removeAttr('hidden');
        },2500);
    },

    nextQuestion: function() {

    },
    
    clickHandler: function() {
        $('.spinner').off('click');
        $('.spinner span').hide();
        $r.spin().done(function(character) {
            $('#content').text('You choose: ' + character.name);
            console.log(character.name);
            $('.spinner').on('click', app.clickHandler);
            $('.spinner span').show();
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