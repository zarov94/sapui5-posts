sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
], function (Controller, JSONModel, History) {
    'use strict';

    return Controller.extend("sap.fiori.postsApp.controller.PostDetail", {

        onInit: function () {

            console.log("detail page init");
            
           var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
           oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);            
        },
        _onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").invoicePath,
				model: "posts"
			});
		},

        onNavBack: function () {
            
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("allposts", {}, true);
            }
        }
    });



});