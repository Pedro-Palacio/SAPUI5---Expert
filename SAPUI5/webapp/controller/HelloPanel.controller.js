sap.ui.define([
    "sap/ui/core/mvc/Controller", //Modulo del controlador
    "sap/m/MessageToast", //Message Toast from sap.m library
    "sap/ui/core/Fragment"

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {*typeof sap.m.MessageToast} MessageToast
     * @param {*typeof sap.ui.core.Fragment} Fragment  
     */

    function (Controller, MessageToast, Fragment) {
        "use strict";
        return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {

            onInit: function () {


            },

            onShowHello: function () {
                // get the i18n model from the view
                var oBundle = this.getView().getModel("i18n").getResourceBundle();

                // Get the JSON model from the view
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMessage = oBundle.getText("helloMessage", [sRecipient]);
                MessageToast.show(sMessage);
            },
            onOpenDialog: function () {
                const oView = this.getView(); // We need to instantiante this view in order to get the models and load it as a dependency of our fragment
                // We need  to as a dependency to our fragment the view where the models are available, we do this by oView.getId()
                //Fragment Load - it only loads the fragment, but don't open it.  
                if (!this.byId("helloDialog")) {
                    Fragment.load({
                        id: oView.getId(), // Here we set the view of this controller as a dependency of our Fragment. This in order to get the models 
                        name: "logaligroup.SAPUI5.view.HelloDialog",
                        controller: this
                        
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                        
                    });
                }
                else {
                    this.byId("helloDialog").open();
                }

                //Remember to FIX THE ISSUE about not being able to pop up more than once the Dialog. 
            },
            onCloseDialog : function(){
                this.byId("helloDialog").close();
            }
        });
    });