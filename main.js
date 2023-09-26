const openShopping = document.querySelector('.shopping')
const closeShopping = document.querySelector('.closeChopping')
const list = document.querySelector('.list')
const listCard = document.querySelector('.list-card')
const body = document.querySelector('body')
const total = document.querySelector('.total')
const quantity = document.querySelector('.quantity')

openShopping.addEventListener('click', () => {
  body.classList.add('active')
})

closeShopping.addEventListener('click', () => {
   body.classList.remove('active')
})

const products = [
  {
    id: 1,
    name: 'Product name 1',
    image : '1.jpg',
    price: 100
  },
  {
    id: 2,
    name: 'Product name 2',
    image : '2.jpg',
    price: 200
  },
  {
    id: 3,
    name: 'Product name 3',
    image : '3.jpg',
    price: 300
  },
  {
    id: 4,
    name: 'Product name 4',
    image : '4.jpg',
    price: 400
  },
  {
    id: 5,
    name: 'Product name 5',
    image : '5.jpg',
    price: 500
  },
  {
    id: 6,
    name: 'Product name 6',
    image : '6.jpg',
    price: 600
  }
]

const listCards = []

const initialApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div')
    newDiv.classList.add('item')
    newDiv.innerHTML = `
      <img src="img/${value.image}" alt="">
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()} €</div>
      <button class="add" onclick="addToCart(${key})">Add to cart</button>
    `
    list.appendChild(newDiv)

  })
}

initialApp()


const addToCart = (id) => {
  if (listCards[id] == null) {
    listCards[id] = products[id]
    listCards[id].quantity = 1
  }

  reloadCard()
}

const reloadCard = () => {
  listCard.innerHTML = ''
  let count = 0
  let totalPrice = 0
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price
    count = count + value.quantity

    if (value != null){
      let newDiv = document.createElement('li')
      newDiv.innerHTML = `
        <div class="img">
          <img src="img/${value.image}" >
        </div>

        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}€</div>
        <div>${value.quantity}</div>

        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>
      
      `
      
      listCard.appendChild(newDiv)

    }

  })
  total.innerHTML = totalPrice.toLocaleString()
  quantity.innerHTML = count

}

const changeQuantity = (key, quantity) => {
  if (quantity == 0) {
    delete listCards[key]
  } else {
    listCards[key].quantity = quantity
    listCards[key].price = quantity * listCards[key].price
  }

  reloadCard()
}


