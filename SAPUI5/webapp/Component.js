sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Model", //Local model in Model folder
    "sap/ui/model/resource/ResourceModel" //The i18n sap model
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof logaligroup.SAPUI5.model.Model} Model
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     */
    function (UIComponent,Model,ResourceModel) {

        // Here we return the instance of our component

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            
            metadata : {
                manifest : "json"
            //     "rootView": {
            //         "viewName": "logaligroup.SAPUI5.view.App",
            //         "type": "XML",
            //         /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
            //         "id": "app"

            // }
        },
            
            init: function () {
                // call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                //Set data model on the view
                this.setModel(Model.createRecipient());
                //Set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }

        })


    }
);