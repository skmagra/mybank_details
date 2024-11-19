sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.mybankdetails.controller.Bank", {
        onInit() {
            debugger
            //method 1 , less optimised, repeating code lines
//            if (navigator.language == 'es') {
//                var i18nModel = this.getOwnerComponent().getModel("i18n_es");
//                this.getOwnerComponent().setModel(i18nModel, "i18n")
//            } else if (navigator.language == 'en') {
//                var i18nModel = this.getOwnerComponent().getModel("i18n");
//                this.getOwnerComponent().setModel(i18nModel, "i18n")
//            }
//            else {
//                var i18nModel = this.getOwnerComponent().getModel("i18n");
//                this.getOwnerComponent().setModel(i18nModel, "i18n")

//        method 2, more optimised, less code lines
            var oMod;
            if(navigator.language == 'es'){
             oMod = 'i18n_es';
            }else if(navigator.language == 'en'){
             oMod = 'i18n';
            }else{
              oMod = 'i18n' ; 
            }
            var i18nModel = this.getOwnerComponent().getModel(oMod);
                this.getOwnerComponent().setModel(i18nModel, "i18n");
            
        },
        onMoreDet: function () {
            //Create Dialog Lazilly
            //First check whether dialog is there or not
            //If its not there then create one using standard function loadFragment
            //Inside the standard function pass one object and inside that object pass {key: value}
            //checking fragment, creating if not there. then opening.
            if (!this.moreBank) {
                this.moreBank = this.loadFragment(
                    {
                        name: "com.sap.mybankdetails.view.fragment.MoreDetails"
                    }
                );
            }
            //First we are checking if the definition is there or not 
            //then is a standard method inside which we are calling a function
            this.moreBank.then(
                function (oDialog) {
                    // to open the fragment call open function using reference oDialog
                    oDialog.open();

                }
            );
        },
        onClose: function () {
            this.byId("moreBankDet").close()
        },
        onRefresh: function () {
            if (!this.onRef) {
                this.onRef = this.loadFragment(
                    {
                        name: "com.sap.mybankdetails.view.fragment.Refresh"
                    }
                );
            }
            this.onRef.then(
                function (oDialog1) {
                    oDialog1.open();
                }
            );
        }
    });
});