/**
 * Angular crypto-js
 * https://github.com/janppires/angular-crypto-js.git
 **/
 
 (function (root, factory) {
   'use strict';
   if (typeof define === 'function' && define.amd) {
     // AMD. Register as an anonymous module.
     define(['angular', 'crypto-js'], factory);
   } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
     // CommonJS support
     module.exports = factory(require('angular'), require('crypto-js'));
   } else {
     // in the case of no module loading system
     // then don't worry about creating a global
     // variable like you would in normal UMD.
     // It's not really helpful... Just call your factory
     return factory(root.angular, root.CryptoJS);
   }
 }(this, function (angular, CryptoJS) {
   'use strict';

   var moduleName = 'angular-crypto-js';
   angular
      .module(moduleName, [])
      .factory('ngCrypto', [ngCrypto]);

   function ngCrypto(){
       return {
           md5Hex : md5Hex,
           sha1Hex : sha1Hex,
           sha256Hex: sha256Hex,
           sha224Hex: sha224Hex,
           sha512Hex: sha512Hex,
           sha384Hex: sha384Hex,
           sha3Hex: sha3Hex,
       }

       function md5Hex(message){
           return toHex(CryptoJS.MD5, message);
       }

       function sha1Hex(message){
           return toHex(CryptoJS.SHA1, message);
       }

       function sha256Hex(message){
           return toHex(CryptoJS.SHA256, message);
       }

       function sha224Hex(message){
           return toHex(CryptoJS.SHA224, message);
       }

       function sha512Hex(message){
           return toHex(CryptoJS.SHA512, message);
       }

       function sha384Hex(message){
           return toHex(CryptoJS.SHA384, message);
       }

       function sha3Hex(message){
           return toHex(CryptoJS.SHA3, message);
       }

       function toHex(hasher, message){
           return hasher(message).toString(CryptoJS.enc.Hex);
       }
   }

   return moduleName;
 }));
