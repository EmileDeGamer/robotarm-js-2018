function moveRight(amount){
    if (amount == null){
        amount = 1
    }
    for (let i = 0; i < amount; i++) {
        robotArm.moveRight()
    }
}

function moveLeft(amount){
    if (amount == null){
        amount = 1
    }
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

function dropRight(amount){
    if (amount == null){
        amount = 1
    }
    grab()
    moveRight(amount)
    drop()
}

function dropLeft(amount){
    if (amount == null){
        amount = 1
    }
    grab()
    moveLeft(amount)
    drop()
}

function move(side, amount){
    if (side == "l"){
        moveLeft(amount);
    }
    else if (side == "r"){
        moveRight(amount);
    }
}