const car ={
    name:"Audi",
    model:"RsQ8",
    color:"black"
    parts: ["v8", "acro"],
    drive: function(){
        return "ik ben aan het rijden"
    }

}

const output = document.getElementById("output")

output.innerHTML = 
<h2>${car.name}</h2>
<p>${car.model}</p>
<p>${car.part}</p>