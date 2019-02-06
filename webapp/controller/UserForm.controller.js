sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast'
], function (jQuery, Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("sapui5-sample-project.sapui5-sample-project.controller.UserForm", {

		onInit: function () {
			// JSON sample data
			// var data = {
			// 	"name": "Masoom Ul Haq S",
			// 	"email": "masoomulhaqs@gmail.com",
			// 	"location": "Bangalore",
			// 	"portfolio": "www.masoomulhaq.in"
			// };
			// var oModel = new JSONModel(data);
			// set the data for the model
			// oModel.setData(data);
			// set the model to the core
			var oModel = new JSONModel("model/UserData.json");
			// this.getView().setModel(oModel);
			this.getView().setModel(oModel);
		},
		onPress: function(evt) {
			window.console.log(evt);
			MessageToast.show("Form submitted successfully!");
		}
	});

});