/**
 * SVGAnimator v1.0.0 - Inline SVG DOM injection library for CSS or JS svg animation.
 * 
 *
 * Copyright (c) 2015-2016 Thierry Charbonnel
 * @license MIT
 */
 
 (function (window, document) {

  'use strict';
  
  var isLocal = window.location.protocol === 'file:';
  var hasSvgSupport = document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
  
  var load = function(url, callback){
  
    if (!window.XMLHttpRequest) {
      // Browser does not support XMLHttpRequest
      callback(0);
      return false;
    }
    
    if (httpRequest.responseXML === null) {
      // httpRequest.responseXML === null
      callback(0);
      return false;
    }
    
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function () {
        // readyState 4 = complete
        if (httpRequest.readyState === 4) {
        
          switch (httpRequest.status) {
          	case 404:
          		// 404
          		callback(404);
          		break;
          	
          	case 200:
          	  // httpRequest.responseXML.documentElement
          	  callback(200, httpRequest.responseXML.documentElement);
          	break;
          	
          	default:
          		// error undefined
          		callback(0);
          }
        
        }
        
    }
    
  
  };
  
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
    
    elements.forEach(function(element){
    
      
      // get Svg Url
      // var svg = load(element.src);
      
    });
    
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