'use strict';
angular.module('gleepostweb.network')
	.filter('to_trusted', ['$sce', function($sce){
	        return function(text) {
	            return $sce.trustAsHtml(text);
	        };
	    }]);