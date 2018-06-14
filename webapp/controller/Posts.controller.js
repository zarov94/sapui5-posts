sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    'use strict';

    return Controller.extend("sap.fiori.postsApp.controller.Posts", {

        onInit: function () {
            console.log("Posts Controller");
            
            var oPosts = new JSONModel();
            this.getView().setModel(oPosts, "posts");
            this._loadPosts();
        },

        _loadPosts: function() {

            var postsUrl = "https://jsonplaceholder.typicode.com/posts";

            var data = [];

            jQuery.ajax({
                type: "GET",
                contentType: "application/json",
                url: postsUrl,
                dataType: "json",
                async: false,
                success: function (response, textStatus, jqXHR) {
                    data = response;
                }
            });
            this.getView().getModel("posts").setProperty("/",data);

        },
        onFilterPosts: function (oEvent) {
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");

            if (sQuery) {
                aFilter.push(new Filter("PostTitle", FilterOperator.Contains, sQuery));
            }
            //filter binding
            var oList = this.byId("posts");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        onPress: function (oEvent) {

            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            oRouter.navTo('detail', {
                postPath: oItem.getBindingContext("posts").getPath().substr(1)
            });
        }

    });
});