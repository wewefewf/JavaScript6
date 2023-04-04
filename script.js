let index = +prompt()
let arr = ['Alexsey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
if (arr.includes(arr[index])) {
    arr.splice(index, 1);
    console.log(`Элемент ${arr[index]} удален из массива`);
} else {
    console.log(`Элемент с индексом ${index} отсутствует в массиве`);
}