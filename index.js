// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25

const fs = require('fs');

console.clear();
console.log('==============');
console.log('Tabla del 5');
console.log('==============');
let salida = '';
for (let index = 1; index <= 10; index++) {
    const resul = index*5;
   salida += '5 x '+ index +' = '+ resul + '\n';
}

fs.writeFile('tabla-5.txt',salida,(err) => {
    if (err) throw err;
    console.log('tabla 5 creado');
})