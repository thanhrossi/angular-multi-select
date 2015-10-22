myApp.controller( 'demoCallbacks' , [ '$scope', function ($scope) {
    $scope.modernBrowsers = [
        { 
            icon: '<img src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',                         
            name: 'Opera',              
            maker: 'Opera Software',        
            ticked: true    
        },
        { 
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',             
            name: 'Internet Explorer',  
            maker: 'Microsoft',
            ticked: false   
        },
        { 
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',         
            name: 'Firefox',            
            maker: 'Mozilla Foundation',    
            ticked: true    
        },
        { 
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',             
            name: 'Safari',             
            maker: 'Apple',                 
            ticked: false   
        },
        { 
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',  
            name: 'Chrome',             
            maker: 'Google',                
            ticked: true    
        }    
    ];

    $scope.fOpen = function() {
        console.log( 'On-open' );
    }

    $scope.fClose = function() {
        console.log( 'On-close' );
    }    

    $scope.fClick = function( data ) {           
        console.log( 'On-item-click' );        
        console.log( 'On-item-click - data:' );        
        console.log( data );
    }    

    $scope.fSelectAll = function() {
        console.log( 'On-select-all' );
    }

    $scope.fSelectNone = function() {
        console.log( 'On-select-none' );
    }

    $scope.fReset = function() {
        console.log( 'On-reset' );
    }        

    $scope.fClear = function() {
        console.log( 'On-clear' );
    }

    var keyword = null;

    $scope.fFilterChange = function( data) {
        console.log( 'On-filter-change' );
        console.log( 'On-filter-change - keyword: ' + data.keyword );
        console.log( 'On-filter-change - result: ' );

        keyword = data.keyword;
        console.log( data.result );
    }
    $scope.submit = function(e){
        var hasKeyword = false;

        if (e.which === 13) {
            for(var index in $scope.modernBrowsers) {
                if($scope.modernBrowsers[index].name.indexOf(keyword) > -1) {
                    hasKeyword = true;
                    break;
                }
            }

            if(!hasKeyword) {
                $scope.modernBrowsers.push({icon: '', name: keyword, maker: ' ', ticked: true});

                var clearButton = angular.element(('.clearButton'));

                setTimeout(function() {
                    clearButton.triggerHandler('click');
                }, 0)
            }

        }
    }
}]);
