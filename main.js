let com = []
for (let i = 0; i < Infinity; i++) {
    let text = prompt('Введите команду (add/del/stop)');
    if (text.startsWith('add, ')) {
        let item = text.replace('add, ', "")
        com.push(item);
        console.log(item);
        console.log(com);

    } else if (text.startsWith('del,')) {
        let remoted = text.replace('del, ', '');
        let index = com.indexOf(remoted);
        if (index !== -1) {
            com.splice(index, 1);
            console.log(index);
            console.log(com);
            

        } else {
            console.log(com);
        }

    } else if (text === 'stop') {
        break;
    }
}
console.log(com);


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let odd = []
let even = []
for (let num of array) {
    if (num % 2 == 0) {
        even.push(num);
    } else {
        odd.push(num);
    }
}
console.log(odd);
console.log(even);

