let goods = [
   {id: 1, title: 'Микроволновка', price: 1500, count: 4},
   {id: 2, title: 'Телевизор', price: 2500, count: 1},
   {id: 3, title: 'Тумба', price: 5500, count: 5},
   {id: 4, title: 'Холодильник', price: 200, count: 2},
   {id: 5, title: 'Стол', price: 5600, count: 5},
   {id: 6, title: 'Телефон', price: 1900, count: 12},
   {id: 7, title: 'Компьютер', price: 4200, count: 11},
   {id: 8, title: 'Мангал', price: 250, count: 7},
   {id: 9, title: 'Люстра', price: 300, count: 3},
]
let even_id = goods.filter(elem => elem.id % 2 == 0)
console.log(even_id)
let sum = goods.reduce((sum, elem) => sum + elem.price * elem.count, 0)
console.log(sum)
let multiple_five = goods.find(elem => elem.price % 5 == 0)
console.log(multiple_five)
let index_goods = goods.findIndex(elem => elem.count > 11)
console.log(index_goods)

let counter = 0
goods.forEach(elem => {
    if (elem.count % 2 == 1) {
        counter++
    } return 
} )
console.log(counter)

let counter_name = 0
goods.forEach(elem => {
    if (elem.title[0] === 'Т') {
        counter_name++
    } return 
} )
console.log(counter_name)

let goods_discount = goods.map(elem => elem.price * 0.65)
console.log(goods_discount)

let goods_counter = goods.map((elem) => ({...elem, count: 0}))
console.log(goods_counter)

let goods_sorted = goods.sort((crElem, nxElem) => {
    if(crElem.title > nxElem.title) return 1
    if(crElem.title < nxElem.title) return -1
    if(crElem.title === nxElem.title) return 0
})
console.log(goods_sorted)


