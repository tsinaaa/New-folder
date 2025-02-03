const inputBtn = document.getElementById("donate")
const donateBtn = document.getElementById("donate-btn")
const total = document.getElementById("total")



let totalDon = JSON.parse(localStorage.getItem("totalDonation"))//get from local storage

donateBtn.addEventListener("click", function() {
    totalDon += Number(inputBtn.value)
    total.textContent = "$" + totalDon 
    inputBtn.value = ""
    localStorage.setItem("totalDonation", JSON.stringify(totalDon))//input into local storage
})

console.log(localStorage.getItem("totalDonation"))

