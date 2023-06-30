const rl = require('readline').createInterface(process.stdin, process.stdout);
const fs = require('fs')
const findNum = Math.floor(Math.random()*100);
console.log(findNum)
let counter = 1;


function game() {
    
    rl.question(`Угадай число от 1 до 100. Сейчас ${counter} попытка`, (answer) => {
        if (answer === 'esc') {
            rl.close();
            return;
        }
        
        if (findNum == answer) {
            let nowData = new Date();
            let textWin = `Ура ты угадал с ${counter} попытки ${nowData}\n`;
            fs.appendFile('readme2.txt', textWin, err => {
                if (err) throw err;
            })
            rl.close();
            return;
        } else if (isNaN(answer) || answer === '') {
            console.log('Не число или пустой ввод');
        } else if (answer > 100 || answer < 0) {
            console.log('Вне диапазона 0-100');
        } else if (answer > findNum) {
            console.log('Число больше');
        } else if (answer < findNum) {
            console.log('Число меньше');
        }
        counter++;
        game()
    });
}
game()

