sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/m/MessageToast",
		"ru/example/model/formatter"
	
	], function(Controller, Filter, FilterOperator, MessageToast, formatter){
		
		Controller.extend("ru.example.controller.App", {
			
			formatter: formatter,
			
			onShowHello: function() {
				// read msg from i18n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("testData").getProperty("/recipient/name");
				var msg = oBundle.getText("helloMsg", [sRecipient]);
				
				MessageToast.show(msg);
			},
			
			onFilterProducts: function(oEvent) {
				// build filter array
				var aFilter = [],
					sQuery = oEvent.getParameter("query"),
					// retrieve list
					oList = this.getView().byId("invoiceList"),
					// get binding for aggregation items
					oBinding = oList.getBinding("items");
					
				if (sQuery) {
					aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
				}
				// apply filter, an empty filter array simply removes the filter
				// witch will make all entries visible agains
				oBinding.filter(aFilter);
			},
			
			onItemSelected: function(oEvent) {
				var oSelectedItem = oEvent.getParameter("listItem");
				var oContext = oSelectedItem.getBindingContext();
				var sPath = oContext.getPath();
				var oPanel = this.byId("productDetailsPanel");
				oPanel.bindElement({path: sPath});
				oPanel.setVisible(true);
			}
			
		});
	
});