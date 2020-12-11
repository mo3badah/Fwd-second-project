//let sh,w,h,a,l,v;
module.exports = {
    "sh":"",
    "w":"",
    "h":"",
    "a":this.w*this.h,
    "l":(this.w+this.h)*2,
    "v":this.a*this.h,
    "prt":console.log(`the 3D shape is : ${this.sh} and its properties is : ${this.w} , ${this.h} , ${this.h} 
It's area is : ${this.a} 
It's length is : ${this.l} 
It's volume is : ${this.v} 
 `)
}

