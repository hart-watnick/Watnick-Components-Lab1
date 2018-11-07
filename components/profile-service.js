"use strict";

function ProfileService($location) {
    const self= this;
    self.userInfo = {
        name: "Hart",
        contact: "hart@peanuts.com",
        bio: "Rock the boat like a one-eyed pirate, Rick James I got glittah on my eyelids.",
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