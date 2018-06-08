sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, MessageBox, JSONModel) {
    'use strict';

    return Controller.extend("sap.fiori.postsApp.controller.App", {


        onInit: function () {

            var oModel = new JSONModel();

            var aData = jQuery.ajax({
                type: "GET",
                contentType: "application/json",
                url: "https://jsonplaceholder.typicode.com/posts",
                dataType: "json",
                success: function (response, textStatus, jqXHR) {
                    
                    oModel.setData(response);
                    alert("success to post");
                }
            });
            this.getView().setModel(oModel, "posts");
        }

    });
});