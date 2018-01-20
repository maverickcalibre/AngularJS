'use strict'

eventsApp.controller('EventController',
        function EventController($scope){
            $scope.event = {
                name: "Angular boot camp",
                date: '1/1/2017',
                time: '12:07 am',
                location: {
                    address: 'Cypress bend Dr',
                    city: 'Pompano Beach',
                    province: 'FL'
                },
                imageUrl: '/img/angularjs-logo.png',
                sessions: [
                    {
                        name: 'Directives Master Class'
                    },
                    {
                        name: 'Scopes for fun and profit'
                    },
                    {
                        name: 'Well behaved Controllers'
                    }
                ]
            }
        }    
);
