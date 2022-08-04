const imgP = document.getElementById("img-profile")
const nameP = document.getElementById("p-name")
const mailP = document.getElementById("p-email")
const addP = document.getElementById("p-address")
const btnR = document.getElementById("btn-random")
const genderP = document.getElementById("span-gender-icon")
const divP = document.getElementById("div-user-card")
const divL = document.getElementById("div-loading-card")
callApi()

imgP.onload = () => {
  divL.style.display = ""
  divP.style.display = ""
}

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgP.src = resp.data.results[0].picture.large
  nameP.innerText = `${resp.data.results[0].name.first} ${resp.data.results[0].name.last}`
  mailP.innerText = resp.data.results[0].email
  addP.innerText = `${resp.data.results[0].location.city} ${resp.data.results[0].location.state} ${resp.data.results[0].location.country} ${resp.data.results[0].location.postcode}`
  if(resp.data.results[0].gender == "male"){
    genderP.innerText = "👨"
  }else{
    genderP.innerText = "👩"
  }
  divL.style.display = "none"
  divP.style.display = ""
}

btnR.onclick = () => {
  callApi()
  divL.style.display = ""
}
