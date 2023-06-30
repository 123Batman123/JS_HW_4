let rl = require('readline').createInterface(process.stdin, process.stdout);
const fs = require('fs');


async function question(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, (answer) => {
            resolve(answer);
        })
    })
    
}


async function game() {
    const findNum = Math.floor(Math.random()*100);
    console.log(findNum);
    let counter = 1;
    while(true) {
        const input = await question(`Угадай число от 1 до 100. Сейчас ${counter} попытка`);

        if (input === 'q') {
            rl.close();
            break;
        }

        if (findNum == input) {
            let nowData = new Date();
            let textWin = `Ура ты угадал с ${counter} попытки ${nowData}\n`;
            fs.appendFile('readme3.txt', textWin, err => {
                if (err) throw err;
            })
            rl.close();
            break;
        } else if (isNaN(input) || input === '') {
            console.log('Не число или пустой ввод');
        } else if (input > 100 || input < 0) {
            console.log('Вне диапазона 0-100');
        } else if (input > findNum) {
            console.log('Число больше');
        } else if (input < findNum) {
            console.log('Число меньше');
        }

        counter++;
    }
}

game();