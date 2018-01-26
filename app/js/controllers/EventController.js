'use strict'

eventsApp.controller('EventController',
        function EventController($scope){
            $scope.snippet = '<span style="color-red">hi there</span>';
            $scope.boolValue = true;
            $scope.myStyle = {color:'red'};
            $scope.myClass = 'blue';
            $scope.buttonDisabled = true;
            $scope.event = {
                name: "Angular boot camp",
                date: 1359781015626,//'1/1/2017',
                time: '12:07 am',
                location: {
                    address: 'Cypress bend Dr',
                    city: 'Pompano Beach',
                    province: 'FL'
                },
                imageUrl: '/img/angularjs-logo.png',
                sessions: [
                    {
                        name: 'Directives Master Class',
                        creatorName: 'David',
                        duration: '1 hr',
                        level: 'Advanced',
                        abstract: 'In this session you will learn the ins and out of directives!',
                        upVoteCount: 0
                    },
                    {
                        name: 'Scopes for fun and profit',
                        creatorName: 'John',
                        duration: '30 mins',
                        level: 'Introductory',
                        abstract: 'In this session you will learn the ins and out of scopes!',
                        upVoteCount: 0
                    },
                    {
                        name: 'Well behaved Controllers',
                        creatorName: 'Ganesh',
                        duration: '1.5 hr',
                        level: 'Intermediate',
                        abstract: 'In this session you will learn the ins and out of controllers!',
                        upVoteCount: 0
                    }
                ]
            }

            $scope.upVoteSession = function(session){
                session.upVoteCount++;
            };

            $scope.downVoteSession = function(session){
                session.upVoteCount--;
            }
        }    
);
