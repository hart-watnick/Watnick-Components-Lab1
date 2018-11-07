"use strict";

const editProfile = {
    template: `
    <form ng-submit = "$ctrl.saveProfile($ctrl.userInfo);">
        <h2>Use the form below to update your profile</h2>
        <label>Name</label>
        <input type = "text" ng-model = "$ctrl.userInfo.name">
        <label>Contact</label>
        <input type = "text" ng-model = "$ctrl.userInfo.contact">
        <label>Bio</label>
        <textarea type = "text" class= "bio-input" ng-model = "$ctrl.userInfo.bio"></textarea>
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