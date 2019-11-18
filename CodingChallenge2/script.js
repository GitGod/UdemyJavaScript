var scoreJohn = (89+120+103)/3;
var scoreMike = (116+94+123)/3;
var scoreMary = (97+134+105)/3;

switch(true){
    case scoreJohn >scoreMary && scoreJohn > scoreMike:
        console.log('John win with ' + scoreJohn + ' averge points');
        break;
    case scoreMary >scoreJohn && scoreMary > scoreMike:
        console.log('Mary win with ' + scoreMary + ' averge points');
        break;
    case scoreMike > scoreMary && scoreMike > scoreJohn:
        console.log('Mike win with ' + scoreMike + ' averge points');
        break;
    case scoreJohn === scoreMary && scoreJohn > scoreMike:
        console.log('John and Mary win with ' + scoreJohn + ' averge points');
        break;
    case scoreMary > scoreJohn && scoreMary === scoreMike:
        console.log('Mary and Mike win with ' + scoreMary + ' averge points');
        break;
    case scoreMike ===scoreMary && scoreMike === scoreJohn:
        console.log('Mike and John win with ' + scoreJohn + ' averge points');
        break;
    default:
        console.log('All draw')
    }