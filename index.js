(function(){

  'use strict';

  var box = document.getElementById('js-box'),
      button = document.getElementById('js-button');

  var events = [
    'webkitAnimationEnd',
    'mozAnimationEnd',
    'animationend',
    'webkitAnimationIteration',
    'mozAnimationIteration',
    'animationiteration',
    'webkitAnimationStart',
    'mozAnimationStart',
    'animationstart'
  ];

  function outputEvent(event) {
    console.group(event.type);
    console.log(event);
    console.groupEnd();
  }

  events.forEach(function(eventName) {
    box.addEventListener(eventName, outputEvent, false);
  });

  box.addEventListener('webkitAnimationEnd', function() {
    box.classList.remove('js-move');
  }, false);
  box.addEventListener('mozAnimationEnd', function() {
    box.classList.remove('js-move');
  }, false);
  box.addEventListener('animationend', function() {
    box.classList.remove('js-move');
  }, false);

  button.addEventListener('click', function() {
    box.classList.add('js-move');
  }, false);

}());
