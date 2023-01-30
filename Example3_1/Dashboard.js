mydata = [];

let d = localStorage.getItem('token');
console.log(d);


fetch("https://real-pear-fly-kilt.cyclic.app/accounts/", {
    method: 'get',
    headers: {
        "Authorization": "bearer " + d
    }
}).then(y => y.json()).then(y => display(y))


display = (y) => {
    mydata= y ;
    for (const key in mydata[0]) {
        if (key != "jwtToken") {
            document.getElementById('thead').innerHTML += `<th>${key}</th> `
        }
    }
    

   
    document.getElementById('tbody').innerHTML=y.map((ele)=>{
        let td="";
        for (const key in ele) {
                const element = ele[key];
             td+= `<td>${element}</td> `
                  
        }
        return `<tr>${td}</tr>`
    }).join(" ")

   console.log(mydata);

}