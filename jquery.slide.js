jQuery.fn.extend({
  slide: function(params){
    var $ = jQuery;
    var param = params || {};
    var $parent = $(this);
    var $images = $parent.find('img');
    var w = param['width'] || $($images[0]).width() + 'px';
    var h = param['height'] || $($images[0]).height() + 'px';
    var background = param['background'] || '#ffffff';
    $parent.css({'width':w,'height':h,'background':background,'overflow':'hidden','position':'relative'});
    $images.removeAttr('hidden').fadeOut(0);
    $($images[$images.length-1]).fadeIn(0);

    var fadeTime = param['fadeIn'] || 1000;
    var delayTime = param['delay'] || 1000;
    var waitTime = fadeTime + delayTime;

    var index = 0
    var z = 0
    setInterval(function(){
      $($images[index]).css({'position':'absolute','z-index':''+z}).fadeIn(fadeTime).delay(waitTime).fadeOut(0);
      ++z;
      if(++index == $images.length){ index = 0 }
    }, waitTime);
  }
});