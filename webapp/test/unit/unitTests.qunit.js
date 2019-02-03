/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5-sample-project/sapui5-sample-project/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});