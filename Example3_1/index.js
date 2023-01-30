
class PostData {
    constructor(entity,data) {
       this.entity=entity;
       this.data=data;
    }

    getdata() {
        fetch("https://real-pear-fly-kilt.cyclic.app/accounts/" + this.entity, {
            method: "post",
            body: JSON.stringify(this.data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(y => y.json()).then(y => 
        localStorage.setItem("token",y.jwtToken))
    }

}
Submit = () => {
    let frm = document.forms["frm"];
    let myregData = {}
    for (let i = 0; i < frm.length; i++) {
        switch (frm.elements[i].type) {
            case 'checkbox': myregData[frm.elements[i].name] = frm.elements[i].value=true;
            
                break;
            default:
                myregData[frm.elements[i].name] = frm.elements[i].value;
                break;
        }


    }
    let regData = new PostData("register", myregData);
    regData.getdata();
    console.log(regData);
    window.location.href(login.html)
    
}

login=()=>{
    let frm=document.forms["frm"];
    let myLoginData = {}
    for (const iterator of frm) {
        myLoginData[iterator.name]=iterator.value;
        
    }
    console.log(myLoginData);
    let logData = new PostData("authenticate", myLoginData);
    logData.getdata();
    window.location.href(Dashboard.html)
  
}