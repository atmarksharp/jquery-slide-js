# jquery.slide.js

This is the easiest slideshow generator.

## Download

[jquery.slide.js](https://raw.githubusercontent.com/atmarksharp/jquery-slide-js/master/jquery.slide.js)

## Usage

```html
<div id="slide">
  <li data-src="a.png"/>
  <li data-src="b.png"/>
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
    fadeIn: 1000, // fadein speed (optional, default value is 1000[ms])
    delay: 1000, // delay duration (optional, default value is 1000[ms])
  });
});
```
