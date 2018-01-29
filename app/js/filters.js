'use strict';

eventsApp.filter('durations', function(){
    return function(duration){
        switch (duration) {            
            case 1:
                return 'Half Hour';
                break;
            case 2:
                return '1 Hour';
                break;
            case 3:
                return 'Half Day';
                break;
            case 4:
                return 'Full Day';
                break;
        }
    }

});

eventsApp.filter('levels', function(){
    return function(level){
        switch (level) {
            case 'Introductory':
                return '/img/Introductory.png';
                break;
            case 'Intermediate':
                return '/img/Intermediate.png';
                break;
            case 'Advanced':
                return '/img/Advanced.png';
                break;            
        }
    }

});