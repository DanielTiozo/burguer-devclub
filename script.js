let allProducts = ""
const productsList = document.querySelector("ul")
const showAll = document.querySelector(".show-itens")
const discount = document.querySelector(".discount")
const sumItems = document.querySelector(".sum-all")
const vegan = document.querySelector(".vegan")

function formatCurrency(value){
    const newValue = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })

    return newValue
}

function showItems(productsArray) {
    allProducts = ""
    productsArray.forEach(product => {
        allProducts += `
        <li>
            <img src="${product.src}"/>
            <p>${product.name}</p>
            <p class="product-price">${formatCurrency(product.price)}</p>
        </li>
    `
    })
    productsList.innerHTML = allProducts
}

function discountItem() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * .9
    }))
    showItems(newPrices)
}

function sumAll() {
    const total = menuOptions.reduce((sum, value) => sum + value.price, 0)
    
    productsList.innerHTML = `
    <li>
            O valor total dos produtos é:<br>${formatCurrency(total)}
    </li>
    `
}

function veganproducts() {
    const filterJustVegan = menuOptions.filter(product => product.vegan)
    showItems(filterJustVegan)
}

// showAll.addEventListener("click", () => showItems(menuOptions))
discount.addEventListener("click", discountItem)
sumItems.addEventListener("click", sumAll)
vegan.addEventListener("click", veganproducts)