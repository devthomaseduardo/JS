let texto = 'linguagem java script';

console.log(texto.length); // -> 21 (incluindo espaços)
console.log('teste'.length); // -> 5

console.log(texto.charAt(0)); // -> 'l'
console.log('abc'.charAt(1)); // -> 'b'

console.log(texto.slice(0, 9)); // -> 'linguagem'
console.log('teste'.slice(1, 4)); // -> 'est'

console.log(texto.split(' ')); // -> ['linguagem', 'java', 'script']
console.log('192.168.1.1'.split('.')); // -> ['192', '168', '1', '1']
