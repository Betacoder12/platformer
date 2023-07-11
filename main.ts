function _1 (sprite: game.LedSprite) {
	
}
basic.forever(function () {
    if (custom.fib()) {
        basic.showLeds(`
            . . . . .
            . . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
})
