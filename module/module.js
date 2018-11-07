"use strict";

angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/profile", {
                template: "<profile></profile>"
            })
            .when("/edit-profile", {
                template: "<edit-profile></edit-profile>"
            });

    }])