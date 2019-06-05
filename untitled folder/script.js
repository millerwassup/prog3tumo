var side = 20;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var predArr = []; // Predator Array
var beastArr = []; // Beast Array
var omnArr = []; 
// function genetareMatrix(lengthY, lengthX, number) {

//     let matrix = [];
//     console.log()
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//     }

//     for (let y = 0; y < lengthY; y++) {
//         matrix.push([]);
//         for (let x = 0; x < lengthX; x++) {
//             let randomCount = getRandomInt(number);
//             matrix[y].push(randomCount);
//         }
//     }
//     return matrix;

// }

// let matrix = genetareMatrix(40, 45, 6);

let matrix = []; // Մատրիցի ստեղծում
let rows = 40; // Տողերի քանակ
let columns = 40; // Սյուների քանակ


function setup() {
    frameRate(5);
    for (let y = 0; y < rows; y++) {
        matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
        for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random()*100);
        if (a >= 0 && a < 20) {
        matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
        } 
        if (a >= 20 && a < 40) {
        matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
        } 
        else if (a >= 40 && a < 50) {
        matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
        } 
        else if (a >= 50 && a < 70) {
        matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
        } 
        else if(a >= 70 && a < 90) {
        matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
        } 
        else if(a >= 90 && a < 100) {
        matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
        } 
        }
        }
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');
    
    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y);
                predArr.push(pred);
            } else if (matrix[y][x] == 4) {
                var be_ast = new Beast(x, y);
                beastArr.push(be_ast);
            } else if (matrix[y][x] == 5) {
                var omn_ivore = new Omnivore(x, y);
                omnArr.push(omn_ivore);
            }
        }
    }
}

//draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
//եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
//draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill("#771bad");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill("#3fc6c2");
                rect(j * side, i * side, side, side);
            }
        }
    }


    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in xotArr) {
        xotArr[i].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in predArr) {

        predArr[i].eat();
    } for (var i in beastArr) {
        beastArr[i].eat();
    } for (var i in omnArr) {
        omnArr[i].eat();
    }
}


