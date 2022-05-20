
let parent = {

    name : "Raj",
    designation : "Sr.Frontend Developer",
    id : 852,
showDetails : function(){
       console.log(this.name,this.designation, this.id);
    }
}

let child = {

    name : "Suraj",
    designation : "Sr.Backend Developer ",
    id : 258,

}

//Question1:
parent.showDetails.call(child);


//Question2:

let pro = Object.create(child);

console.log(pro.__proto__);
console.log(pro.__proto__.__proto__);
console.log(pro.__proto__.__proto__.__proto__);


//Question3:

array = [2,3,4,5,6];
let sum = array.reduce((sum,car)=> sum+car , 0);
console.log(sum);

//Question4:

function func(){
    console.log(Object.keys(child));
}
func();