// https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane
let head = document.createElement("h1")
head.innerHTML= "Predict the Nationality Of a Name"
document.body.append(head)
var divi = document.createElement("div")
divi.setAttribute("id","first")
divi.innerHTML = `<input type = "text" id="txt" placeholder="Enter Name Here">

<button class="second" onClick="foo()">search </button>
`
document.body.append(divi)


let dell =document.createElement("div")
dell.setAttribute("id","lno")
document.body.append(dell)
let dov = document.createElement("div")
dov.setAttribute("id","sho")
document.body.append(dov)

async function foo(){
    let book = document.getElementById("txt").value
//   console.log(book)
let result = await fetch(`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=${book}`)
let res = await result.json()
console.log(res)
console.log(res.length)



let tin = res[0].country[0].country_id
// console.log(tin)


let vin = res[0].country[0].probability
// console.log(vin)

let pin = res[1].country[0].country_id
// console.log(pin)


let min = res[1].country[0].probability
// console.log(min)
document.getElementById("sho").innerHTML=`${book}: A nation for your name:   ${tin}. And probability is:   ${vin}`
console.log("Mr."+book+"  A nation for your name: "+tin+"  And probability is: "+vin)


                                      
document.getElementById("lno").innerHTML=`${book}: A nation for your name:  ${pin}. probability is:  ${min}`
console.log("Mr."+book+"  A nation for your name: "+pin+"  And probability is: "+min)

}

   

