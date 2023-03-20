// interface Square {
//     width: number;
// }
// interface Rectangle extends Square {
//     height: number;
// }
// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//     if (shape instanceof Rectangle) {
//         return shape.width * shape.height;
//     } else {
//         return shape.width* shape.width
//     }
// }


// function asNumber(val: number | string): number {
//     return val as number;
// }

let a:any = 3;
function setLightSwitch(value: boolean) {
    switch (value) {
        case true:
            console.log(1);
            break;
        case false:
            console.log(2);
            break;
        default:
            console.log('실행되지않을까 걱정');
    }
}
setLightSwitch(a)