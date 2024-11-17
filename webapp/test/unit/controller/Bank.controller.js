/*global QUnit*/

sap.ui.define([
	"comsap/mybank_details/controller/Bank.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Bank Controller");

	QUnit.test("I should test the Bank controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
