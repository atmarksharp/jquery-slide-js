jQuery.fn.extend({
  slide: function(params){
    var $ = jQuery;
    var param = params || {};
    var $slide = $(this);
    var images = [];
    $slide.find('li').each(function(){
      images.push($(this).attr('data-src'));
    });
    $slide.html('');

    var __back = $('<div id="sl-back"></div>');
    var __front = $('<img src="" id="sl-front"/>');
    __back.append(__front);
    $slide.append(__back);

    var getBack = function(){ return $($slide.children()[0]) };
    var getFront = function(){ return $(getBack().children()[0]) };

    var fadeTime = +(param['fadeIn']) || 1000;
    var delayTime = +(param['delay']) || 1000;
    var waitTime = fadeTime + delayTime;

    var i = 0
    setInterval(function(){
      n1 = i%images.length;
      n2 = (i+1)%images.length;
      getBack().css('background-image','url('+images[n1]+')');
      getFront().attr('src',images[n2]).hide().fadeIn(fadeTime);
      i++;
    }, waitTime)
  }
});