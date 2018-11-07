"use strict";

const profile = {
    template: `
    <section class= "prof">
        <section class= "pic">
            <img ng-src = "me.jpg">
        </section>
        <section class= "info">
            <h1>
                {{$ctrl.userInfo.name}}
            </h1>
            <p class= "email">
                {{$ctrl.userInfo.contact}}
            </p>
            <p class= "desc">
                {{$ctrl.userInfo.bio}}
            </p>
            <button class= "edit-btn" ng-click= "$ctrl.loadEdit();">
                Edit
            </button>
        </section>

    </section>
    `,
    controller: ["ProfileService", function (ProfileService) {
        const vm = this;
        vm.userInfo = ProfileService.getUserInfo();
        vm.loadEdit = () => {
            ProfileService.loadEdit();
        };
    }]

};

angular
    .module("App")
    .component("profile", profile);