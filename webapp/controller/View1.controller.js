sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller'
], function (jQuery, Controller) {
	"use strict";

	return Controller.extend("sapui5-sample-project.sapui5-sample-project.controller.View1", {

		onInit: function () {
			// var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("page2");
			// this.byId("link").setHref(sUrl);
		},

		onHomePress: function () {
			var iconTabHeader = this.byId('iconTabHeader');
			iconTabHeader.setSelectedKey('invalidKey');

			var label = this.byId('labelId');
			label.setText('Home Screen');
		},

		onSelectTab: function (event) {
			var label = this.byId('labelId');
			var tab = event.getParameter('item');

			label.setText(tab.getText());
		},

		onToPage2: function () {
			window.console.log("page2");
			this.getOwnerComponent().getRouter().navTo("page2");
		}
	});

});