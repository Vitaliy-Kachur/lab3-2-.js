const height = prompt('Введіть довжину масиву: ')
const width = prompt('Введіть ширину масиву: ')
const arr = []
let max = 0
let index = 0

for (let i = 0; i < width; i++)
{
    arr.push([])
    for(let j = 0; j < height; j++){
        arr[i][j] = Math.floor(Math.random()*100)+1
    }
}
console.log(arr)

for (let i = 0; i < width; i++)
{
    let suma2 = 0
    for(let j = 0; j < height; j++){
        suma2 += arr[i][j]
    }
    console.log(`Сума елементів в ${i} рядку: ${suma2}`)
    if (suma2 > max)
    {
        max = suma2
        index = i
    }
}
console.log(`Найбільша сума ${max} в ${index} рядку`)