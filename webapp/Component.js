sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (UIComponent, JSONModel) {
    'use strict';
    return UIComponent.extend("sap.fiori.postsApp.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {

            UIComponent.prototype.init.apply(this, arguments);


            var OData = {
                //todo
            }
            var oModel = new JSONModel(oData);
			this.setModel(oModel);

            //set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

            this.getRouter().initialize();
        }
    });


});