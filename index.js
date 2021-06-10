// Code your solution in this file!
function returnFirstTwoDrivers(list){
    const firstTwo = function(list){
        const boom = [list[0],list[1]]
        return boom;
    }
    return firstTwo(list)
}

function returnLastTwoDrivers(list){
    const lastTwo = function(list){
        const splash = [list[list.length -2],list[list.length -1]]
        return splash;
    }
    return lastTwo(list)
}



const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(x){
    function fareMultiplier(y){
        return y*x
    }
    return fareMultiplier
}

function fareDoubler(y){
    const doubled = createFareMultiplier(2);
    return doubled(y);
}


function fareTripler(y){
    const tripled = createFareMultiplier(3);
    return tripled(y);
}


function selectDifferentDrivers(one,two){
    return two(one)

}