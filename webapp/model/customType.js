sap.ui.define([
	"sap/ui/model/SimpleType"
],	function(SimpleType) {
	"use strict";
	
	return SimpleType.extend("ru.example.model.customType", {
		
		formatValue: function(){},
		parseValue: function(){},
		validationValue: function(){}
	});
});