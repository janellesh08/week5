const getCoffeeOrderButton = document.getElementById("getCoffeeOrderButton")
const coffeeOrdersList = document.getElementById("coffeeOrdersList")
const saveButton = document.getElementById("saveButton")
const emailInput = document.getElementById("emailInput")
const orderInput = document.getElementById("orderInput")
const orderSize = document.getElementById("orderSize")
const totalInput = document.getElementById("totalInput")

getCoffeeOrderButton.addEventListener("click", function(){
    getCoffeeOrders()
    // console.log(coffeeOrdersItems)
})



function getCoffeeOrders(){

    let coffeeRequest = new XMLHttpRequest()
    coffeeRequest.open("GET", "https://troubled-peaceful-hell.glitch.me/orders")
    coffeeRequest.send()


    coffeeRequest.addEventListener("load", function(){
        const coffeeOrders = JSON.parse(this.responseText)
        const coffeeOrdersItems = coffeeOrders.map((order)=>{
            return `<li>
                <div>${order.email}</div>
                <div>${order.type}</div>
                <div>${order.size}</div>
                <div>${order.price}</div>
            </li>
            `
        })
    coffeeOrdersList.innerHTML = coffeeOrdersItems.join ("")
    })

    

}

saveButton.addEventListener("click", function(){
    const body = {
        email: emailInput.value,
        type: orderInput.value,
        size: orderSize.value,
        price: totalInput.value 
    }

    let request = new XMLHttpRequest()
    request.open('POST','https://troubled-peaceful-hell.glitch.me/orders')
    request.setRequestHeader('Content-type', 'application/json')
    request.send(JSON.stringify(body))
    
})