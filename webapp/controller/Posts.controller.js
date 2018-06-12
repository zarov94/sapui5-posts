sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    'use strict';

    return Controller.extend("sap.fiori.postsApp.controller.Posts", {

        onInit: function () {
            var oPosts = new JSONModel();
            this.getView().setModel(oPosts, "posts");
            this._loadPosts();
        },

        _loadPosts: function() {
            var self = this;
            jQuery.ajax({
                type: "GET",
                contentType: "application/json",
                url: "https://jsonplaceholder.typicode.com/posts",
                dataType: "json",
                async: "false",
                success: function (response, textStatus, jqXHR) {
                    console.log(response);

                    self.getView().getModel("posts").setProperty("/data", response)
                    alert("success to post");
                }
            });
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
        
        onPostClick: function (oEvent) {
            return oEvent;
        }
    });
});