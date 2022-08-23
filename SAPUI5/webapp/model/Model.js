//This file returns an object, its properties can be accessed as any other Js Object
sap.ui.define([
    "sap/ui/model/json/JSONModel"
],

    /**
     * @param {*typeof sap.ui.model.json.JSONModel}  JSONModel
     */

    function (JSONModel) {
      "use strict";
      return {
          
        createRecipient : function (){

            var oData = {
                recipient: {
                    name: "World"
                }
                
            };
            return new sap.ui.model.json.JSONModel(oData);
        }
         
      };


    })