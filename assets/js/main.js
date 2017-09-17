
/*let loadHTML = function() {
	setTimeout(function(){
        $('#coverPage').addClass("invisible");
        //$('#coverPage').attr('hidden');
        $('#content').removeAttr('hidden');

    },1200);
}*/

const app = {
    item : {
        question: undefined,
        answer: undefined,
    },
    init: function() {
        app.changeCoverPage();
        //app.setup();
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
        var $r = $('.roulette').fortune(6);
        $('.spinner').off('click');
        $('.spinner span').hide();
        $r.spin().done(function(price) {
          $('.spinner').on('click', app.clickHandler);
          $('.spinner span').show();
        });
    }
}
$(document).ready(app.init);
 
var $r = $('.roulette').fortune(6);

var clickHandler = function() {
  $('.spinner').off('click');
  $('.spinner span').hide();
  $r.spin().done(function(price) {
    $('.spinner').on('click', clickHandler);
    $('.spinner span').show();
  });
};

$('.spinner').on('click', clickHandler);

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