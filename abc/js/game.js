$(document).ready(function() {

    $('.promo-close').on('click', function() {
        $('.promo').slideUp('fast');

    });
    $('#promo-btn-block').on('click', function() {
        console.log(1);

        $(this).removeClass('active');
        $('#promo-block').addClass('active');
        setTimeout(function() {

        }, 300);

    });

    $('#promo-btn-active').on('click', function() {
        if ($('#promo-input').val() != '') {
            $('#promo-btn-block').removeClass('active');
            $('#promo-block').removeClass('active');
            $('#promo-block-active').addClass('active');
            $('#promocode').val($('#promo-input').val()).css({
                'background': '#00ad5d',
                'color': '#ffffff'
            });
            $('.promo-item').val($('#promo-input').val());
        }

    });

    $('.inform-controls .item').on('click', function() {
        $('.inform-controls .item').removeClass('active');
        $('.inform-tabs .item').removeClass('active');
        $(this).addClass('active');
        var index = $(this).attr('data-target');
        $('.inform-tabs .item[data-target="' + index + '"]').addClass('active');
        $('.inform-tabs .item[data-target="' + index + '"]').css("opacity", '0');
        $('.inform-tabs .item[data-target="' + index + '"]').animate({
            opacity: '1'
        }, 300);

    });

    $('.promo-cancel').on('click', function() {
        $('#promo-btn-block').addClass('active');
        $('#promo-block').removeClass('active');
        $('#promo-block-active').removeClass('active');
        $('#promocode').val('').attr('style', '');
    });

    if ($('.phone').length) {
        $('.phone').mask('(999) 999-99-99', {
            placeholder: '(___) ___-__-__'
        });
    }


});



//
// $(document).scroll(function() {
//     $('#main-nav').toggleClass('mode-fixed', $(document).scrollTop() >= 170);
// });

var count = 0;

function mapCreateInfo() {
    $('#map-element').parent().css('left', '0').css('top', 'auto');
    $('#map-element').parent().parent().css('left', '0').css('top', 'auto');
    $('#map-element').parent().parent().parent().css('left', '0').css('top', 'auto');
    var mapInfo = $('#map-element').parent().parent().parent().parent();
    var width = mapInfo.width(),
        height = mapInfo.height(),
        left = parseInt(mapInfo.css('left')),
        newWidth = 500,
        newHeight = 350,
        top = parseInt(mapInfo.css('top')),
        newTop = top - (newHeight - height);

    var newLeft = left + (width / 2);
    mapInfo.width(newWidth).css({
        left: newLeft,
        marginLeft: newWidth / 2 * -1,
        height: newHeight,
        top: newTop
    });
    mapInfo.addClass('map-block');
    mapInfo.children().eq(0).remove();
}

$(window).on('load', function() {

    var options = [{
            min: 1,
            max: 10,
            text: 'комн.'
        },
        {
            min: 1,
            max: 10,
            text: 'cануз.'
        },
        {
            min: 1,
            max: 100,
            text: 'м2'
        }
    ];

    $('input.stack-item').on('change', function() {

        var target = $(this);

        if (target.attr('data-type')) {
            var targetVal = parseInt($(this).val());
            var targetType = parseInt(target.attr('data-type')) - 1;
            if (targetVal < options[targetType].min) {
                targetVal = options[targetType].min;
            } else if (targetVal > options[targetType].max) {
                targetVal = options[targetType].max;
            }

            target.val(targetVal + ' ' + options[targetType].text);
        }

    });

    $('.stack-control').on('click', function() {

        var action = $(this).html();

        if (action == '+') {
            var target = $(this).prev();
            var targetType = parseInt(target.attr('data-type')) - 1;
            var targetVal = parseInt(parseInt(target.val()) + 1);
            if (targetVal >= options[targetType].min && targetVal <= options[targetType].max) {
                target.val(targetVal + ' ' + options[targetType].text);
            }

        } else {
            var target = $(this).next();
            var targetType = parseInt(target.attr('data-type')) - 1;
            var targetVal = parseInt(parseInt(target.val()) - 1);
            if (targetVal >= options[targetType].min && targetVal <= options[targetType].max) {
                target.val(targetVal + ' ' + options[targetType].text);
            }
        }

    });

    $('#game-start, #rag').on('click', function() {
        startGame();
        $('#rag').css('pointer-events', 'none');
        $('#rag').unbind("click");
        $('html, body').animate({
            scrollTop: $('.section-game').offset().top - 100
        }, 500);

        // $('.main-banner').css({
        //     'transform': 'translateY(-700px)'
        // }, 100);
        //
        // $('.main-banner').fadeOut(200);

    });

    // $('#rag').on('click', function() {
    //     startGame();
    //     // $('#rag').css('pointer-events', 'none');
    //     $('#rag').unbind("click");
    //     $('html, body').animate({
    //         scrollTop: $('.section-game').offset().top - 100
    //     }, 500);
    // });

    if ($(window).width() < $('.map').width()) {
        $('.map').css({
            position: 'relative',
            left: ($('.map').width() - $(window).width()) / 2 * -1
        });
    }

    mapCreateInfo();

    function createCanvas(parent, width, height) {
        var canvas = {};
        canvas.node = document.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        canvas.node.width = width || 100;
        canvas.node.height = height || 100;
        parent.appendChild(canvas.node);
        return canvas;
    }

    function init(container, width, height, fillColor) {
        var canvas = createCanvas(container, width, height);
        var ctx = canvas.context;

        var pattern = ctx.createPattern(fillColor, "repeat");
        fillColor = pattern;

        ctx.fillCircle = function(x, y, radius, fillColor) {

            this.fillStyle = fillColor;
            this.beginPath();

            this.moveTo(x, y);
            this.shadowColor = '#000';

            this.shadowBlur = 30;
            this.arc(x, y, radius, 0, Math.PI * 2, false);
            this.fill();

        };

        ctx.clearTo = function(fillColor) {
            var img = document.getElementById("dirty");
            ctx.drawImage(img, 0, 0, width, height);
        };

        ctx.clearTo(fillColor || "#ddd");

        canvas.node.onmousemove = function(e) {
            if (!canvas.isDrawing) {
                return;
            }
            var x = e.pageX - $('.canvas').offset().left;
            var y = e.pageY - $('.canvas').offset().top;
            var radius = 30;
            var fillColor = '#ff0000';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillCircle(x, y, radius, fillColor);
        };

        canvas.node.onmousedown = function(e) {
            canvas.isDrawing = true;
        };

        canvas.node.onmouseup = function(e) {
            canvas.isDrawing = false;
            checkResult(ctx, width, height);
        };

        canvas.node.addEventListener("touchmove", function(e) {

            console.log(1);
            if (!canvas.isDrawing) {
                return;
            }
            e.preventDefault();
            var x = e.changedTouches[0].pageX - $('.canvas').offset().left;
            var y = e.changedTouches[0].pageY - $('.canvas').offset().top;

            $('#rag').css({
                left: e.changedTouches[0].pageX - 100,
                top: e.changedTouches[0].pageY - 75
            });
            var radius = 30;
            var fillColor = '#ff0000';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillCircle(x, y, radius, fillColor);

        }, false);

        canvas.node.addEventListener("touchstart", function(e) {
            canvas.isDrawing = true;
        }, false);

        canvas.node.addEventListener("touchend", function(e) {
            canvas.isDrawing = false;
        }, false);
    }

    if ($('#canvas').length && $('#canvas').is(":visible")) {

        var container = document.getElementById('canvas');

        var img = new Image();

        img.src = "/img/window-dirty.jpg";
        img.onload = function() {
            resizeGame();
            init(container, $('#canvas').width(), $('#canvas').height(), img);
        };

    }

    $(window).resize(function() {
        resizeGame();
        if ($(window).width() < $('.map').width()) {
            $('.map').css({
                position: 'relative',
                left: ($('.map').width() - $(window).width()) / 2 * -1
            });
        }
    });

    $('.open-modal-callback').on('click', function() {
        $('#main-callback-btn').click();
    });

    var formText = $('#callback-title').html();

    $('#map').on('click', '.open-modal', function() {
        $('.modal-callback .callback-form').css('display', 'none');
        $('.modal-callback .callback-form.form-type-1').css('display', 'block');
        var btnTitle = $(this).text();
        btnTitle = btnTitle.toLowerCase();
        $('#callback-title').html(formText);
        if (btnTitle == 'начать тест драйв') {
            $('#callback-title').html('Заказать тест-драйв');
        }
        if (btnTitle == 'заказать звонок') {
            btnTitle = 'Заказать звонок';
            $('.modal-callback .callback-form').css('display', 'none');
            $('.modal-callback .callback-form.form-type-2').css('display', 'block');
        }

        $('.modal-callback').modal('show');
        $('#modal-callback-btn').val(btnTitle);
    });

    $('.open-modal').on('click', function() {
        $('.modal-callback .callback-form').css('display', 'none');
        $('.modal-callback .callback-form.form-type-1').css('display', 'block');
        var btnTitle = $(this).text();
        btnTitle = btnTitle.toLowerCase();
        $('#callback-title').html(formText);
        if (btnTitle == 'начать тест драйв') {
            $('#callback-title').html('Заказать тест-драйв');
        }
        if (btnTitle == 'заказать звонок') {
            btnTitle = 'Заказать звонок';
            $('.modal-callback .callback-form').css('display', 'none');
            $('.modal-callback .callback-form.form-type-2').css('display', 'block');
        }


        $('.modal-callback').modal('show');
        $('#modal-callback-btn').val(btnTitle);
        if ($(this).hasClass('mode-small')) {
            $('input[name=ROOMS]').val($(this).attr('data-target') + ' комн.');
        }
    });
});

var timeCheck = true;
var gameEnd = false;

function gameVictory() {
    alert('Окно чистое!');
}

function resizeGame() {

    var $game = $('#canvas');
    var gameWidth = $game.width();

    if (gameWidth <= 1110 && gameWidth > 940) {
        $game.height(458);
        $('.main-banner').height(458);
    } else if (gameWidth <= 940 && gameWidth > 720) {
        $game.height(388);
        $('.main-banner').height(388);
    } else if (gameWidth <= 720 && gameWidth > 576) {
        $game.height(297);
        $game.remove();
        $('.main-banner').height(297);
        $('.section-game').remove();
    } else if (gameWidth <= 576) {
        $game.remove();
        $('.section-game').remove();
    }
}

function checkResult(ctx, width, height) {
    if (timeCheck && !gameEnd) {
        //timeCheck = false;
        var imgDate = ctx.getImageData(120, 0, width - 240, height - 70);
        imgDate = imgDate.data;
        count = 0;
        iterator(imgDate, callback);

        var sum = ((width - 240) * (height - 70)) / 30;
        var end = (sum / 100 * 5);
        var result = sum - (count / 4);
        console.log('sum: ' + sum + ' end:' + end + ' result:' + result);
        if (result < end) {
            gameEnd = true;
            $('#rag').addClass('transition-move');
            $('#rag').attr('style', '');
            $('#game').unbind('mousemove');
            $('.win-alert').fadeIn('slow');
            $('#game-informer').remove();
            $('#game-informer-2').addClass('col-xl-6 offset-md-3');
            $('#game-informer-2').addClass('win');
            $('.section-game').append('<div class="section-game-over" style="opacity: 0;"></div>');
            $('.section-game-over').animate({
                opacity: 1,
                zIndex: 0
            }, 500);
            setTimeout(function() {
                $('.win-alert').fadeOut('fast');
                $('.main-banner').removeClass('start');
                $('#promocode').val('NQI8737');
                $('#promocode').addClass('full');
                $('.alert-rag').hide();
            }, 3000);
        }

    }
}

function iterator(array, callback) {

    var item, index = 0,
        length = array.length;
    for (; index < length; index += 30) {
        item = array[index];

        if (Object.prototype.toString.call(item) === '[object Array]') {
            iterator(item, callback);
        } else {
            callback(item);
        }
    }
}


function startGame() {

    $('.section-game-over').fadeOut(200, function() {
        $('.section-game-over').remove();
    });

    $('.main-banner').addClass('start');

    $('#game').mousedown(function(e) {
        $('#rag').addClass('active');
    });

    $('#game').mouseup(function(e) {
        $('#rag').removeClass('active');
    });

    $('#game').mousemove(function(e) {
        $('#rag').css({
            left: e.pageX - 100,
            top: e.pageY - 130 - 220
        });
    });

}


function callback(item) {
    if (item == 0) {
        count++;
    }
}


//AJAX новости и статьи
function newsLoader(p) {
    var o = this;
    this.root = $(p.root);
    this.newsBlock = $(p.newsBlock, this.root);
    this.newsLoader = $(p.newsLoader);
    this.curPage = 1;
    this.loadSett = (p.loadSett);

    // загружаем дополнительные новости
    this.loadMoreNews = function() {
        var loadUrl = location.href;
        if (location.search != '') {
            loadUrl += '&';
        } else {
            loadUrl += '?';
        }
        loadUrl += 'PAGEN_' + o.loadSett.navNum + '=' + (++o.curPage);


        $.ajax({
                url: loadUrl,
                type: "POST",
                data: {
                    AJAX: 'Y'
                }
            })
            .done(function(html) {
                o.newsBlock.append(html);


                if (o.curPage == o.loadSett.endPage) {
                    o.newsLoader.parent().hide();

                }
            });
    }

    this.init = function() {
        o.newsLoader.click(function(event) {
            o.loadMoreNews();
            event.preventDefault();
        })
    }

}
