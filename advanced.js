function moveRight(amount){
    for (let i = 0; i < amount; i++) {
        robotArm.moveRight()
    }
}

function moveLeft(amount){
    for (let i = 0; i < amount; i++) {
        robotArm.moveLeft()  
    }
}

function grab(){
    robotArm.grab()
}

function scan(){
    grab()
    let kleur = robotArm.scan()
    return kleur
}

function drop(){
    robotArm.drop()
}

function dropRight(){

}

function dropLeft(){
    
}