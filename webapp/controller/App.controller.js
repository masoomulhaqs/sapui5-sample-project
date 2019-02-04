sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller'
], function (jQuery, Controller) {
	"use strict";

	return Controller.extend("sapui5-sample-project.sapui5-sample-project.controller.App", {

		onInit: function () {
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
		}
		
	});

});