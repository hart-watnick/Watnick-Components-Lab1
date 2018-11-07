"use strict";

const profile = {
    template: `
    <section class= "prof">
        <section class= "pic">
            <img src = "me.jpg">
        </section>
        <section class= "info">
            <h1>
                Hart Watnick
            </h1>
            <p class= "email">
                hart@hart.com
            </p>
            <p class= "desc">
                So scared about this election tonight man shoooooooot!
            </p>
            <button class= "edit-btn" ng-click= "/edit-profile">
                Edit
            </button>
        </section>

    </section>
    `,
    controller: ["ProfileService", function (ProfileService) {
        const vm = this;
        vm.info = ProfileService.getUserProfile();
    }]

}

angular
    .module("App")
    .component("profile", profile);