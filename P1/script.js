console.assert("Hola Mundo :D");
console.clear();
console.dir(window);
console.dirxml(document.body);

const marvel = ['espiderman','acero man','capitanazo america','lobbeznito'];
console.group('los héroes más poderosos del planeta');
marvel.forEach(superheroe => console.log(superheroe))
console.groupEnd();