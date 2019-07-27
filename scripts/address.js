

const container = document.querySelector("#wishlist")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const favoriteThing = document.querySelector("#fullName").value
    const placeToBuy = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    const finalMessage = `I can purchase a ${favoriteThing} at ${placeToBuy}<br>`
    if (favoriteThing === "" || placeToBuy === "") {
        alert("You must enter some text here!");
    }

    container.innerHTML += finalMessage
    
    document.querySelector("#fullName").value = null
    document.querySelector("#address").value = null
})




