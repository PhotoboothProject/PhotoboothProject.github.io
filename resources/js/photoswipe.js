"use strict";

/* exported initPhotoSwipeFromDOM */

// eslint-disable-next-line no-unused-vars
var ssRunning = false,
  ssTimeOut;
var ssDelay = 5000,
  ssButtonClass = '.pswp__button--playpause';

// eslint-disable-next-line no-unused-vars
function initPhotoSwipeFromDOM(gallerySelector) {
  var gallery = new PhotoSwipeLightbox({
    gallery: gallerySelector,
    children: 'a',
    bgOpacity: 1,
    loop: true,
    pinchToClose: true,
    closeOnVerticalDrag: true,
    clickToCloseNonZoomable: false,
    counter: true,
    zoom: true,
    tapAction: 'toggle-controls',
    bgClickAction: 'toggle-controls',
    wheelToZoom: true,
    // eslint-disable-next-line object-property-newline
    //padding: {top: 20, bottom: 40, left: 100, right: 100},
    escKey: true,
    arrowKeys: true,
    returnFocus: true,
    initialZoomLevel: 'fit',
    maxZoomLevel: 1,
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe
  });

  // Slideshow not running from the start
  setSlideshowState(ssButtonClass, false);
  gallery.on('change', function () {
    if (ssRunning) {
      gotoNextSlide();
    }
  });
  gallery.on('close', function () {
    if (ssRunning) {
      setSlideshowState(ssButtonClass, false);
      $('.pswp__button--playpause i:first').toggleClass('fa-play fa-pause');
    }
  });
  gallery.on('uiRegister', function () {
    // counter - 5, zoom button - 10, info - 15, close - 20.
    gallery.pswp.ui.registerElement({
      name: 'custom-caption',
      order: 6,
      isButton: false,
      appendTo: 'root',
      html: 'Caption text',
      // eslint-disable-next-line no-unused-vars
      onInit: function onInit(el, pswp) {
        gallery.pswp.on('change', function () {
          var currSlideElement = gallery.pswp.currSlide.data.element;
          var captionHTML = '';
          if (currSlideElement) {
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
          }
          el.innerHTML = captionHTML || '';
        });
      }
    });
    gallery.pswp.ui.registerElement({
      name: 'playpause',
      ariaLabel: 'Slideshow',
      order: 19,
      isButton: true,
      html: '<i class="fa fa-play"></i>',
      // eslint-disable-next-line no-unused-vars
      onClick: function onClick(event, el, pswp) {
        // toggle slideshow on/off
        $('.pswp__button--playpause i:first').toggleClass('fa-play fa-pause');
        setSlideshowState(ssButtonClass, !ssRunning);
      }
    });
  });
  gallery.on('afterInit', function () {
    // photoswipe fully initialized and opening transition is running (if available)
    $('.pswp__button--close').empty();
    $('.pswp__button--close').html('<i class="fa fa-times"></i>');
    $('.pswp__button--zoom').empty();
    $('.pswp__button--zoom').html('<i class="fa fa-search-plus"></i>');
  });
  gallery.init();

  /* slideshow management */
  function gotoNextSlide() {
    clearTimeout(ssTimeOut);
    if (ssRunning && Boolean(gallery)) {
      ssTimeOut = setTimeout(function () {
        gallery.pswp.next();
      }, ssDelay);
    }
  }
  function setSlideshowState(el, running) {
    var title = running ? 'Pause Slideshow' : 'Play Slideshow';
    $(el).prop('title', title);
    ssRunning = running;
    gotoNextSlide();
  }
}

// Init on domready
$(function () {
  $('#wrapper').show();
  initPhotoSwipeFromDOM('#galimages');
  $('#gallery').addClass('gallery--open');
  $('#gallery').find('.gallery__inner').show();
});