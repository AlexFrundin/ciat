/* $(document).ready(function() {
    animateImg('.cube-footer_black img');
}); */

/* function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    $container = ($container || $(window))
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateImg(elem) {
    var $target = $(elem);
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(elem).animate({
        top: newq[0],
        left: newq[1]
    }, 10000, function() {
        animateImg(elem);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.05;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

} */

// Peoples

var peoples = {
    1: ['John Doe', 'Project Manager', 'people1.png', 'Lorem ipsum1'],
    2: ['Cole Andrews', 'Manager', 'people2.png', 'Lorem ipsum2'],
    3: ['Stanley Wikerson', 'Designer', 'people3.png', 'Lorem ipsum3'],
    4: ['Sue Fitzgerald', 'Photographer', 'people4.png', 'Lorem ipsum4'],
    5: ['Lyda Andrews', 'Assistent', 'people5.png', 'Lorem ipsum5'],
};

var prevArrow = document.getElementById('prev');
var nextArrow = document.getElementById('next');
var human = document.querySelectorAll('.people-position');
for (var i = 0; i < human.length; i++) {
    human[i].addEventListener('click', function () {
        var humanNum = this.getAttribute('data-num');
        changeInfo(humanNum);
    });
}

var counter = 1;

nextArrow.onclick = function() {
    counter++;
    if (counter == arrayLength() + 1) {
        counter = 1;
    }
    changeInfo(counter);
}

prevArrow.onclick = function() {
    counter--;
    if (counter < 1) {
        counter = arrayLength();
    }
    changeInfo(counter);
}

function changeInfo(num) {
    var name = document.getElementById('name');
    var position = document.getElementById('position');
    var about = document.querySelector('.team-peoples_description');
    var photo = document.querySelector('.photo img');
    name.innerHTML = peoples[num][0];
    position.innerHTML = peoples[num][1];
    photo.src = 'assets/img/' + peoples[num][2];
    about.innerHTML = '<p>' + peoples[num][3] + '</p>';
}

function arrayLength() {
    for (key in peoples) {
        var quantity = key++;
    }
    return quantity;
}

// menu
$(document).ready(function(){
    $('.mob-menu').click(function() {
        $('.menu-list').addClass('menu-active');
    });
    $(document).mouseup(function (e){
        var div = $('.menu-list');
        if (!div.is(e.target)
            && div.has(e.target).length === 0
            && !$('.mob-menu').is(e.target)) {
            div.removeClass('menu-active');
        }
    });
    $('.menu-list_nav a').click(function(event) {
        $('.menu-list').removeClass('menu-active');
    });
    $('.close').click(function(event) {
        $('.menu-list').removeClass('menu-active');
    });
});

//cubs

$(window).scroll(function () {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if (document.documentElement.clientWidth > 1199) {
        if ($(this).scrollTop() > 200) {
            $('.cube-wrapper').css({'position':'absolute', 'top': '260px'});
        } else {
            $('.cube-wrapper').css({'position':'fixed', 'top': '140px'});
        }
        if (scrollBottom > 7600) {
            $('.cube-footer').css({'position':'fixed', 'bottom': '240px', 'top': 'auto'});
        } else {
            $('.cube-footer').css({'position':'absolute', 'top': '100px'});
        }
    }
    if (document.documentElement.clientWidth > 991 && document.documentElement.clientWidth < 1199) {
        if ($(this).scrollTop() > 200) {
            $('.cube-wrapper').css({'position':'absolute', 'top': '260px'});
        } else {
            $('.cube-wrapper').css({'position':'fixed', 'top': '140px'});
        }
        if (scrollBottom > 7350) {
            $('.cube-footer').css({'position':'fixed', 'bottom': '200px', 'top': 'auto'});
        } else {
            $('.cube-footer').css({'position':'absolute', 'top': '0px'});
        }
    }
    if (document.documentElement.clientWidth < 991 && document.documentElement.clientWidth > 767) {
        if ($(this).scrollTop() > 100) {
            $('.cube-wrapper').css({'position':'absolute', 'top': '100px'});
        } else {
            $('.cube-wrapper').css({'position':'fixed', 'top': '60px'});
        }
        if (scrollBottom > 8500) {
            $('.cube-footer').css({'position':'fixed', 'bottom': '175px', 'top': 'auto'});
        } else {
            $('.cube-footer').css({'position':'absolute', 'top': '0px'});
        }
    }
     if (document.documentElement.clientWidth < 767 && document.documentElement.clientWidth > 575) {
        if ($(this).scrollTop() > 100) {
            $('.cube-wrapper').css({'position':'absolute', 'top': '100px'});
        } else {
            $('.cube-wrapper').css({'position':'fixed', 'top': '60px'});
        }
        if (scrollBottom > 9000) {
            $('.cube-footer').css({'position':'fixed', 'bottom': '220px', 'top': 'auto'});
        } else {
            $('.cube-footer').css({'position':'absolute', 'top': '0px'});
        }
     }
      if (document.documentElement.clientWidth < 575) {
        if ($(this).scrollTop() > 70) {
            $('.cube-wrapper').css({'position':'absolute', 'top': '50px'});
        } else {
            $('.cube-wrapper').css({'position':'fixed', 'top': '40px'});
        }
      }
});
