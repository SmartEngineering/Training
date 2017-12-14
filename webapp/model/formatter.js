sap.ui.define([], function() {
	"use strict";
	
	return {
		delivery: function(iWeight, sMeasure) {
			var sResult = "";
			
			if(sMeasure === "G") {
				iWeight = sMeasure / 1000;
			}
			if(iWeight < 0.5) {
				sResult = "Mail Delivery";
			} else if (iWeight < 50) {
				sResult = "Parcel Deliver";
			} else {
				sResult = "Carrier Deliver";
			}
			
			return sResult;
		}
	};
});