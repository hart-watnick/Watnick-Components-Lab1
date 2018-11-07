"use strict";

function ProfileService($location) {
    const self= this;
    self.userInfo = {
        name: "Snoopy",
        contact: "snoopy@peanuts.com",
        bio: "Best friends with Woodstock. Bark. Good Dog.",
    };  

    self.getUserInfo = () => {
        return self.userInfo;
    };
    self.setUserInfo = (newUserInfo) => {
        self.userInfo = newUserInfo;
        $location.path("/profile");
    };

    self.loadEdit = () => {
        $location.path("/edit-profile");
    };

    

}


angular 
    .module("App")
    .service("ProfileService", ProfileService);