sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller'
], function (jQuery, Controller) {
	"use strict";

	return Controller.extend("sapui5-sample-project.sapui5-sample-project.controller.App", {

		onInit: function () {
		},

		onHomePress: function () {
			// var iconTabHeader = this.byId('iconTabHeader');
			// iconTabHeader.setSelectedKey('invalidKey');

			// var label = this.byId('labelId');
			// label.setText('Home Screen');
			this.getOwnerComponent().getRouter().navTo("home");
		},

		onSelectTab: function (event) {
			// var label = this.byId('labelId');
			var tab = event.getParameter('item');
			window.console.log(tab.getText());

			// label.setText(tab.getText());
		},
		
		navigateTo: function(evt) {
			window.console.log(evt.getSource());
			// var label = this.byId('labelId');
			// this.getOwnerComponent().getRouter().navTo(label);
		},
		navigateToHome: function(evt) {
			window.console.log("home");
			this.getOwnerComponent().getRouter().navTo("home");
		},
		navigateToCarousel: function(evt) {
			window.console.log("page1");
			this.getOwnerComponent().getRouter().navTo("carousel");
		},
		navigateToPage1: function(evt) {
			window.console.log("page1");
			this.getOwnerComponent().getRouter().navTo("page1");
		},
		navigateToPage2: function(evt) {
			window.console.log("page2");
			this.getOwnerComponent().getRouter().navTo("page2");
		},
		navigateToUserForm: function(evt) {
			this.getOwnerComponent().getRouter().navTo("userform");
		},
		navigateToAppConfig: function(evt) {
			this.getOwnerComponent().getRouter().navTo("appconfig");
		},
		navigateToRouting: function(evt) {
			this.getOwnerComponent().getRouter().navTo("page1");
		}
		
	});

});