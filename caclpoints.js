

function calcpoints(results) {
    let points = 0
    for(let i=0 ; i <results.length; i++) {
        debugger;
        if(Number(results[i][1]) > Number(results[i][3])){
            points += 3
        }


        if(Number(results[i][1]) == Number(results[i][3])){
            points += 1
        }

    }
    return console.log(points)
    
}