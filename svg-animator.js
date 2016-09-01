/**
 * SVGAnimator v1.0.0 - Inline SVG DOM injection library for CSS or JS svg animation.
 * 
 *
 * Copyright (c) 2015-2016 Thierry Charbonnel
 * @license MIT
 */
 
 (function (window, document) {

  'use strict';
  
  /**
   * SVGAnimator
   *
   * Replace the given elements with their full inline SVG DOM elements.
   * 
   *
   * @param {array} Array of DOM element
   * @param {object} options
   * @param {function} callback
   * @return {object} Instance of SVGAnimator
   */
  var SVGAnimator = function (elements, options, done) {
    // set default options
    options = options || {};
    if (done && typeof done === 'function') {
      done(1);
    }
  };

  /* global module, exports: true, define */
  // Node.js or CommonJS
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = exports = SVGAnimator;
  }
  // AMD support
  else if (typeof define === 'function' && define.amd) {
    define(function () {
      return SVGAnimator;
    });
  }
  // Otherwise, attach to window as global
  else if (typeof window === 'object') {
    window.SVGAnimator = SVGAnimator;
  }
  /* global -module, -exports, -define */


}(window, document));