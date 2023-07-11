let bool: boolean
/**
* Use this file to define custom functions and blocks.
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="make wall at x$x y$y that blocks $blocker"
    export function foo(y: number, x: number, blocker: game.LedSprite ): void {
        led.plot(x, y)
        if (blocker.get(LedSpriteProperty.X) == x && blocker.get(LedSpriteProperty.Y) == y ) {
              
            
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(): boolean {
      return  input.buttonIsPressed(Button.A) 
    }
}
