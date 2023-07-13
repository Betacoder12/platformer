let bool: boolean
bool = false
let q = [-999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]
let w = [-999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]
let mm = game.createSprite(2, 2)
/**
* Use this file to define custom functions and blocks.
*/

enum MyEnum {
    //% block="right"
    One,
    //% block="left"
    Two,
    //% block="up"
    Three,
    //% block="down"
    Four
}

/**
 * I hate microsoft!!!!
 */
//% weight=100 color=#0fbc11 icon=""
namespace platformer {
    /**
     * makes a wall
     */
    //% block="make wall at x$x y$y"
    export function foo(y: number, x: number): void {
        led.plot(x, y)
        w.push(y)
        q.push(x)
        
        }
    }
    /**
     * tests  if a sprite hits a wall
     */
    //% block="if $b hit wall then"
    export function fib(b: game.LedSprite ): boolean {
         if (convertToText(q).includes(convertToText(b.get(LedSpriteProperty.X))) && convertToText(w).includes(convertToText(b.get(LedSpriteProperty.Y))))  {
         return true   

        }else{
            return false
        }
      
    }
    /**
     *makes a sprite move in any direction 
     */
    //% block="move $sprite $a $pix pixels"
    export function fee(pix: number, a:MyEnum, sprite: game.LedSprite): void {
        
        
        if (a == MyEnum.One && (convertToText(q).includes(convertToText(b.get(LedSpriteProperty.X) + 1)))) {
            sprite.set(LedSpriteProperty.Direction, 90)
            sprite.move(pix)
        } else if (a == MyEnum.Two && (convertToText(q).includes(convertToText(b.get(LedSpriteProperty.X) - 1)))) {
            sprite.set(LedSpriteProperty.Direction, 270)
            sprite.move(pix)
        } else if (a == MyEnum.Three && (convertToText(q).includes(convertToText(b.get(LedSpriteProperty.Y) - 1)))) {
            sprite.set(LedSpriteProperty.Direction, 0)
            sprite.move(pix)
        } else if (a == MyEnum.Four && (convertToText(q).includes(convertToText(b.get(LedSpriteProperty.Y) + 1)))) {
            sprite.set(LedSpriteProperty.Direction, 180)
            sprite.move(pix)
        }
        
    }
    /**
     * destroys a wall
     */
    //% block=" remove wall at x$x y$y"
    export function destroy(x: number, y:number): void {
      q.pop(x)
      w.pop(y)
      led.unplot(x, y)
     }
    
    export function jump(pix: number): void {

    }
 }
