# jquery.slide.js

This is the easiest slideshow generator.

## Download

[jquery.slide.js](https://raw.githubusercontent.com/atmarksharp/jquery-slide-js/master/jquery.slide.js)

## Usage

```html
<div id="slide">
  <img src="a.png" hidden/>
  <img src="b.png" hidden/>
</div>
```

```javascript
jQuery(function(){
  $('#slide').slide();
});
```

## Parameters

```javascript
jQuery(function(){
  $('#slide').slide({
    width: 600, // slideshow width (optional, default value is a width of first image)
    height: 400, // slideshow height (optional, default value is a height of first image)
    fadeIn: 1000, // fadein speed (optional, default value is 1000[ms])
    delay: 1000, // delay duration (optional, default value is 1000[ms])
    background: '#ffffff' // background-color of slideshow (optional, default value is '#ffffff')
  });
});
```
