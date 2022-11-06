sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

],
    /**
         * 
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         * @param {typeof sap.ui.model.json.JSONModel} JSONModel     
         */
    function (Controller, JSONModel) {

        return Controller.extend("logaligroup.SAPUI5.controller.InvoicesList", {

            onInit: function () {

                let oViewModel = new JSONModel({
                    usd: "USD",
                    eur: "EUR",
                    cop:"COP"
                });
                this.getView().setModel(oViewModel, "currency");
            },




        })


    })
    ;
