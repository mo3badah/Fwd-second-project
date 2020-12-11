let person={
    firstName:"Mohamed",
    secondName:"Reda",
    age:22
}
module.exports={
"fs":function display(fn){
    console.log("the first name is : "+fn)
},
"ls":function last(ln) {

    console.log("the last name is : " + ln)
},
"ag":function age(ag) {
    console.log("the age is : " + ag)

}
};
function display(){
    console.log("the first name is : "+person.firstName)
    setTimeout(last,3000)
}
function last() {
    console.log("the last name is : " + person.secondName)
    setTimeout(age,3000)
}
function age() {
    console.log("the age is : " + person.age)

}
// display();
module.exports.show = display()

