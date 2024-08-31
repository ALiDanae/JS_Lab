



function trus(array) {

    count = 0
    for(let i=0 ; i <array.length; i++) {
        
        if(array[i] === true){
            count += 1
        }
    }
    
    return console.log(count)
}