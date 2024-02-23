




var elModeBtn = document.querySelector(".header__btn")
var elBody = document.querySelector("body")

elModeBtn.addEventListener("click", function() {
    elBody.classList.toggle("mode")
})




// let elCountryList = document.querySelector(".country")

// function generateCountries(arr){
//     arr.map(item => {
//         let elItem = document.createElement("li")
//         let elImg = document.createElement("img")
//         let elTitle = document.createElement("h2")

//         elItem.classList.add("country-item")
//         elImg.src = item.img
//         elImg.classList.add("country-img")
//         elTitle.classList.add("country-title")
//         elTitle.textContent = item.name

//         elItem.append(elImg, elTitle)
//         elCountryList.appendChild(elItem)

//         elItem.addEventListener("click", function(){
//             document.body.classList.toggle("mode")
//         })        
//     })
// }
// generateCountries(countries)





