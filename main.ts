sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (player2, projectile) {
    player2.startEffect(effects.warmRadial, 500)
    player2.sayText("Ouch!",500)
    info.changeLifeBy(-1)
})
let lemon = sprites.create(img`
    5 5 5 5 . . . . . . . . . . . . 
    5 5 5 5 5 5 . . . . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . . . 5 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . . . 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
lemon.setPosition(80, 60)
scene.setBackgroundColor(10)
controller.moveSprite(lemon)
lemon.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(2000, function () {
    sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 7 . . . . . . . . .
        . . . . . . 7 7 . . . . . . . .
        . . . . . . 7 7 7 . . . . . . .
        . . . . . 7 7 . 7 . . . . . . .
        . . . . 7 7 . . 7 7 7 . . . . .
        . . . 7 7 . . . . . 7 7 7 . . .
        . . . 7 2 . . . . . . 2 2 7 . .
        . . 2 2 2 2 . . . . 2 2 2 2 . .
        . . 2 2 2 2 . . . . 2 2 2 2 . .
        . . 2 2 2 2 . . . . 2 2 2 2 . .
        . . . 2 2 . . . . . . 2 2 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, Math.randomRange(10, 50), Math.randomRange(10, 50))
})
game.onUpdateInterval(500, function () {
    sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 7 . . 7 . . . . .
        . . . . 7 . 7 . 7 7 . . . . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
        . . . . . 7 7 7 7 7 7 . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 d 2 2 d 2 2 2 2 2 . . .
        . . . 2 2 2 2 2 2 2 2 d 2 . . .
        . . . 2 d 2 2 2 d 2 2 2 2 . . .
        . . . 2 2 2 2 2 2 2 d 2 2 . . .
        . . . . 2 d 2 2 2 2 2 2 . . . .
        . . . . . 2 2 d 2 d 2 . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . . . . d 2 . . . . . . .
        . . . . . . . . . . . . . . . .
    `, Math.randomRange(-50 , -10),Math.randomRange(10 , 50))
})
let coin = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 5 5 5 5 5 5 . . . . .
    . . . . 4 5 5 5 4 5 5 5 . . . .
    . . . 4 5 5 5 4 4 4 5 5 5 . . .
    . . . 4 5 5 4 5 4 5 4 5 5 . . .
    . . . 4 5 5 4 5 4 5 5 5 5 . . .
    . . . 4 5 5 5 4 4 4 5 5 5 . . .
    . . . 4 5 5 5 5 4 5 4 5 5 . . .
    . . . 4 5 4 5 5 4 5 4 5 5 . . .
    . . . 4 5 5 4 4 4 4 4 5 5 . . .
    . . . 4 5 5 5 5 4 5 5 5 5 . . .
    . . . . 4 5 5 5 5 5 5 5 . . . .
    . . . . . 5 5 5 5 5 5 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
coin.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player2, food) {
    coin.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.changeScoreBy(1)
})
info.setLife(10000)