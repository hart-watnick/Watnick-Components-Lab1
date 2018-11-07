"use strict";

const editProfile = {
    template: `
    <form ng-submit = "$ctrl.saveProfile($ctrl.userInfo);">
        <input type = "text" ng-model = "$ctrl.userInfo.name">
        <input type = "text" ng-model = "$ctrl.userInfo.contact">
        <input type = "text" ng-model = "$ctrl.userInfo.bio">
        <button>Save</button>
    </form>
    
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.userInfo = angular.copy(ProfileService.getUserInfo());
        console.log(vm.userInfo);
        vm.saveProfile = (newUserInfo) => {
            ProfileService.setUserInfo(newUserInfo);
        };
    }]

};

angular 
    .module("App")
    .component ("editProfile", editProfile);