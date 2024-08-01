

function wolf(araays) {
    
if(araays[araays.length-1] == "wolf"){
            return "Pls go away and stop eating my sheep"
        }else{
            for(let i =araays.length ; i>-1 ; i=-1){
                if(araays[i] != "wolf"){                
                    return "Oi! Sheep number "+i+"You are about to be eaten by a wolf!"
                }else{
                    break
                }

            }
        }

}       



console.log(wolf( ["sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))