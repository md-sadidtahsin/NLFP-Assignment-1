//Question No. 1
function describeValue (value){
    return `${typeof value} | ${ value ? 'truthy' : 'falsy'}`;
} 

// console.log(describeValue("hello"))	// "string | truthy"
// console.log(describeValue(""))	// "string | falsy"
// console.log(describeValue(25))	// "number | truthy"    
// console.log(describeValue(0))	// "number | falsy"
// console.log(describeValue(true))	// "boolean | truthy"
// console.log(describeValue(false))	// "boolean | falsy"
// console.log(describeValue(null))	// "object | falsy"
// console.log(describeValue(undefined))	// "undefined | falsy"

// console.log(describeValue(NaN))	// "number | falsy"
// console.log(describeValue("0"))	// "string | truthy"
// console.log(describeValue(null))	// "object | falsy"



//==========================================================================
//==========================================================================



//Question No. 2
function getDayType(value) {
    let day = value.toLowerCase();
    switch(day) {
        case 'friday':
        case 'saturday':
            return 'Weekend';
        case 'sunday':
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
            return 'Working Day';
        default:
            return 'Invalid Day';
    }
}

// console.log(getDayType("Friday")); // "Weekend"
// console.log(getDayType("friday")); // "Weekend"
// console.log(getDayType("MONDAY")); // "Working Day"
// console.log(getDayType("Bandarban")); // "Invalid Day"



//==========================================================================
//==========================================================================



//Question No. 3
function validateUsername (username) {
    if (username.length < 4 ) 
        return 'Too Short';

    if (username.includes(" "))
        return 'No Space Allowed';

    if (username.toLowerCase().includes('admin'))
        return 'Reserved Word';

    return "Available";
}


// console.log(validateUsername("rahim123"))	// "Available"
// console.log(validateUsername("ab"))	// "Too Short"
// console.log(validateUsername("a b"))	// "Too Short"
// console.log(validateUsername("abcd"))	// "Available"
// console.log(validateUsername("rahim islam"))	// "No Space Allowed"
// console.log(validateUsername("superadmin99"))	// "Reserved Word"
// console.log(validateUsername("Admin_Rahim"))	// "Reserved Word"



//==========================================================================
//==========================================================================



//Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    const distanceFare = distance <= 2? 50: 50 + (distance - 2) * 15;
    const waitingFare = waitingMinutes * 2;
    const totalFare = distanceFare + waitingFare;

    return isNight ? totalFare * 1.2 : totalFare;
}

// console.log(getCngFare(2));	// 50	minimum fare
// console.log(getCngFare(1));	// 50	still the minimum, never less
// console.log(getCngFare(5));	// 95	50 + (3 × 15)
// console.log(getCngFare(10));	// 170	50 + (8 × 15)
// console.log(getCngFare(5, false, 10));	// 115	95 + (10 × 2)
// console.log(getCngFare(5, true));	// 114	95 + 20%
// console.log(getCngFare(5, true, 10));	// 138	115 + 20%



//==========================================================================
//==========================================================================



//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) =>{
    const runsRequired = target - scored;

    if(runsRequired <= 0) 
        return "Won";

    if(ballsLeft <= 0)
        return "Lost";

    const requiredRunRate = (runsRequired / ballsLeft) * 6;

    let verdict;
    if(requiredRunRate <= 6) {
        verdict = "Comfortable";
    }else if(requiredRunRate <= 12) {
        verdict = "Tough";
    }else {
        verdict = "Almost Impossible";
    }
    return `Need ${runsRequired} runs in ${ballsLeft} balls | ${verdict}`;
}

console.log(getChaseVerdict(200, 200, 12));	// "Won"
console.log(getChaseVerdict(200, 190, 0));	// "Lost"
console.log(getChaseVerdict(100, 90, 12));	// "Need 10 runs in 12 balls | Comfortable"
console.log(getChaseVerdict(100, 80, 12));	// "Need 20 runs in 12 balls | Tough"
console.log(getChaseVerdict(100, 70, 12));	// "Need 30 runs in 12 balls | Almost Impossible"
console.log(getChaseVerdict(150, 149, 1));	// "Need 1 runs in 1 ball | Almost Impossible"