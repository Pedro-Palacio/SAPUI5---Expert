sap.ui.define([
    "sap/ui/core/mvc/Controller", //Modulo del controlado
    "sap/m/MessageToast", //Message Toast from sap.m library
    
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {*typeof sap.m.MessageToast} MessageToast
     * @param {*typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     
     */

    function (Controller, MessageToast,Model,ResourceModel) {
        "use strict";
        return Controller.extend("logaligroup.SAPUI5.controller.App", {
          
            onInit: function () {
               

            },

            onShowHello: function () {
                // read text from i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();

                // Get the JSON model from the view
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMessage = oBundle.getText("helloMessage",[sRecipient]);
                MessageToast.show(sMessage);
            }
        });
    });