"use strict";

const editProfile = {
    template: `
    <section class= "edit-prof">
        <form>
            <h2>
                Use the form below to update your profile
            </h2>
            <label>
                Name
            </label>
            <input type= "text" ng-model="$ctrl.person.name">
            <label>
                Contact
            </label>
            <input type= "text" ng-model="$ctrl.person.contact">
            <label>
                Bio
            </label>
            <input type = "text" ng-model="$ctrl.person.bio">

            <button class= "update-btn" ng-click="$ctrl.passData($ctrl.person);">Update</button>
        </form>

    </section>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.passData = (profile) => {
            ProfileService.setUserProfile(profile);
        };
    }]
}


angular
    .module("App")
    .component("editProfile", editProfile);