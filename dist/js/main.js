var scene = new ScrollMagic.Controller();
// build a scene
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#title',
    triggerHook: 0.9
  })
  .setClassToggle('#title', 'appear')

  .addTo(scene);


// BLURB STUFF
var items = new ScrollMagic.Controller();

$('.item').each(function () {
  var itemSlide = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7
    })
    .setClassToggle(this, 'items-appear')

    .addTo(items);
});


// OUR PROCESS STUFF
var scrollMagicController = new ScrollMagic.Controller();
$('#our-process span.icon').hover(function () {

  $('#our-process span.icon').removeClass('active');
  $(this).addClass('active');

  var match = $(this).data('match');

  $('#our-process h4').removeClass('active');
  $('h4.' + match).addClass('active');

  return false;
});
var processTween = TweenMax.from('#our-process h2 span', 0.5, {
    y: 150,
    opacity: 0.5
  }, {
    y: 0,
    opacity: 0.1
  },
  0.1
);
var processScene = new ScrollMagic.Scene({
    triggerElement: '#our-process h2',
    duration: 700,
    offset: -100
  })
  .setTween(processTween)
  .addTo(scrollMagicController);
var processIconsTween = TweenMax.from('#our-process .step', 0.5, {
    opacity: 0.4
  }, {
    opacity: 1
  },
  0.1
);
var processIconsScene = new ScrollMagic.Scene({
    triggerElement: '#our-process h2',
    duration: 500,
    offset: -100
  })
  .setTween(processIconsTween)
  .addTo(scrollMagicController);

// OUR SERVICES STUFF - WHAT WE DO STUFF
var scrollserviceController = new ScrollMagic.Controller();
var serviceTween = TweenMax.from('#our-services span', 0.5, {
  y: -100
}, {
  y: 0
});
var serviceScene = new ScrollMagic.Scene({
    triggerElement: '#our-services span',
    duration: 700,
    offset: 50
  })
  .setTween(serviceTween)
  .addTo(scrollserviceController);
var serviceBlurryTween = TweenMax.from('#our-services span.bg-img.normal', 0.5, {
  opacity: 1
}, {
  opacity: 0
});
var serviceBlurryScene = new ScrollMagic.Scene({
    triggerElement: '#our-services span.bg-img.normal',
    duration: 500,
    offset: 50
  })
  .setTween(serviceBlurryTween)
  .addTo(scrollserviceController);
var serviceTextTween = TweenMax.from('#our-services h2, #our-services ul', 0.5, {
  y: 0,
}, {
  y: -165
});
var serviceTextScene = new ScrollMagic.Scene({
    triggerElement: '#our-services',
    duration: 500,
    offset: 50
  })
  .setTween(serviceTextTween)
  .addTo(scrollserviceController);


// CONTACT STUFF

$('#contact .input').click(function () {
  if ($(this).is(':focus')) {
    $('body').addClass('show-form-overlay');
  }
});
$('.form-overlay').click(function () {
  $('body').removeClass('show-form-overlay');
  return false;
});
$('#contact .input-wrap.checkbox input').change(function () {
  $('#contact .input-wrap.checkbox').toggleClass('nopeee');
});