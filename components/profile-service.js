"use strict";

function ProfileService($location) {
    const self= this;
    self.setUserProfile = (profile) => {
        self.info = profile;
        $location.path("/profile");
    };

    self.getUserProfile = () => {
        return self.info;
    };

}


angular 
    .module("App")
    .service("ProfileService", ProfileService);