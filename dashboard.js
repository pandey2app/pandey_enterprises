// partners login script starts here
let mobileNo = '9999999999';
let password = 'Admin@1234';
let tf = false;
let loginForm = document.getElementById('form');
function verifier( mobNo,pwd){
    if(mobNo === mobileNo && pwd === password){
        alert('Welcome sir :)');
        tf = true;
    }else{
        alert("wrong credentials");
        tf = false;
    }
}
function preventLogin(){
    return tf;
}
// partners login script ends here
// dashboard script starts here
function showNav(){
    let navbar = document.getElementById('dashboard-navbar');
    let navCondition = Number(window.getComputedStyle(navbar).height.slice(0,2) > 0)? 'open' : 'close';
    if(navCondition === 'open' ){
        navbar.style.height = '0px';
        navbar.style.visibility = 'hidden';
    }else if(navCondition === 'close'){
        navbar.style.height = '52px';
        navbar.style.visibility = 'visible';
    }
}
function menubarClick(){
    let menubar = document.getElementById('menubar');
    let menubarMarginLeft =(window.getComputedStyle(menubar).marginLeft.slice(0,4) == '0px')? 0:Number(window.getComputedStyle(menubar).marginLeft.slice(0,4));
    if(menubarMarginLeft === 0){
         menubar.style.marginLeft = '-252px';
    }else if(menubarMarginLeft < 0){
        menubar.style.marginLeft = '0';

    }
}
// dashboard script ends here

// Salary Calculator scripts starts from here
let id = 1000;
let i = -1;
class Agent{
    constructor(name, age, mobile){
        this.name = name;
        this.age = age;
        this.mobile = mobile;
        this.id = `PE${++id}`;
        this.dayWiseDel = [];
         const storedDeliveries = localStorage.getItem(`employee[${i}].dayWiseDel`);
         if (storedDeliveries) {
             this.dayWiseDel = JSON.parse(storedDeliveries);
         }
 
         this.updateDel = (del) => {
             this.dayWiseDel.push(del);
             localStorage.setItem(`employee[${i}].dayWiseDel`, JSON.stringify(this.dayWiseDel)); // Update local storage
         };
 
        this.totalDel = (dayWiseDel)=>{
            let totalDel = 0;
            for(let del of dayWiseDel){
                totalDel += del;
            }
            return totalDel;
        }
        this.outstandingBalance = 0;
        this.calSalary = (rate)=>{
            this.outstandingBalance += this.totalDel(this.dayWiseDel) * rate;
            return this.totalDel(this.dayWiseDel) * rate;
        }
        this.status = "working";
        this.show = ()=>{
            console.log(this.name,this.id,this.age,this.mobile,this.status,this.outstandingBalance,this.dayWiseDel);
        }
        localStorage.setItem(`employee[${++i}]`,JSON.stringify(this));
    }
}
let action  = 0;
function showSelect(act){
    let select = document.getElementById('select');
    select.style.display = 'block';
    action = act;
}
function caller(){
    if(action == 1){
        addData();
        
    }else if(action == 2){
        showData();
    }
    let select = document.getElementById('select');
    select.style.display = 'none';


}
function addData(){
    let i = document.getElementById('selection').value;
    let storedPartner = localStorage.getItem(`employee[${i}]`);
    let obj = JSON.parse(storedPartner);
    let packets = +prompt("How many packets deliever today :");
    employee[i].updateDel(packets);
    document.getElementById('selection').value = "";
    localStorage.setItem(`employee[${i}]`,JSON.stringify(obj));
}
function showData(){
    let span = document.getElementsByTagName('span');
    let name = document.getElementById('agent-name');
    let i = document.getElementById('selection').value;
    let storedarr = localStorage.getItem(`employee[${i}]`);
    let obj = JSON.parse(storedarr);
    console.log(obj);
    name.innerText = obj.name;
    span[2].innerText = obj.id;
    span[3].innerText = obj.age;
    span[4].innerText = obj.mobile;
    span[5].innerText = obj.outstandingBalance;
    span[6].innerText = employee[i].totalDel(employee[i].dayWiseDel);
    span[7].innerText = (employee[i].dayWiseDel.length > 0 ) ? employee[i].calSalary(+prompt("Enter rate : ")):0;
    //employee[i].show();
    document.getElementById('selection').value = "";
}
const employee = [];
function addPartner(){
    employee[employee.length] = new Agent(prompt("Enter Partner Name :"),+prompt("Enter Age :"), +prompt("Enter Age :"));
}
employee[employee.length] = new Agent("Ashish Kumar Pandey", 20, 8092546761);
employee[employee.length] = new Agent("Ravi Prakash Pandey", 35, 8850426865);
employee[employee.length] = new Agent("Sumit Kumar", 35, 'N/A');
employee[employee.length] = new Agent("Vishnu Kumar Gupta", 32, 'N/A');
employee[employee.length] = new Agent("Amresh Kumar Pandey", 20, 7294814281);
