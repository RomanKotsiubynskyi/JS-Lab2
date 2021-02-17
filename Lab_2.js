//forEach metod 1.1
let vinners = ["Ivan", "Nazar", "Oscar", "Mulana", "Oksana",];
vinners[0] = 'Abraham'
vinners.forEach(function (a) {
    console.log(a)
});
// ES6
let vinners2 = ["Ivan", "Nazar", "Oscar", "Mulana", "Oksana",];
vinners[3] = 'Abraham'
vinners2.forEach((a) => { console.log(a) });

//forEach metod 1.2
let hundreds = [100, 200, 300, 400, 500,];
hundreds.forEach(function (a, i, arr) {
    console.log(--arr[i]);
});

// ES6
let hundreds2 = [100, 200, 300, 400, 500,];
hundreds2.forEach((a, i, arr) => { console.log(--arr[i]) });

//forEach metod 2.2
let num = [10, 12, 15, 25, 43,];
num.forEach(mF);
function mF(num) {

    console.log(num + 100);
};
// ES6
let num2 = [10, 12, 15, 25, 43, 55];
num2.forEach((num) => { console.log(num + 100) });

//filter metod 1
let rawvalue = [25, 201, 252, 348, 234, 367, 859,];
function smoothing(a) {
    if (a < 200)
        return false;
    else if (a > 400)
        return false;
    else
        return true;
}
console.log(rawvalue.filter(smoothing));
console.log(rawvalue);

// ES6
let rawvalue2 = [25, 201, 252, 348, 234, 367, 859,];
let smoothing = (a) => {
    if (a < 200)
        return false;
    else if (a > 400)
        return false;
    else
        return true;
};
console.log(rawvalue2.filter(smoothing));
console.log(rawvalue2);

//filter metod 2
let abc = ['A', 1, 'B', 2, 'C', 3, 'D', 4, 'E',];
function sort(a) {
    if (a > 0)
        return false;
    else
        return true;
}
console.log(abc.filter(sort));
// ES6
let abc2 = ['A', 1, 'B', 2, 'C', 3, 'D', 4, 'E',];
let sort = (a) =>{
    if (a > 0)
        return true;
    else
        return false;
}
console.log(abc2.filter(sort));

//map metod 1
let degree = [ 0, 30, 90, 150,];
function sin (a){
    a = Math.sin(a*Math.PI/180);
    return(a);
} 
console.log(degree.map(sin)); 

// ES6
let degree2 = [ 0, 30, 90, 150,];
let sin2 = (a) => {
    a = Math.sin(a*Math.PI/180);
    return(a);
}
console.log(degree2.map(sin2)); 

//map metod 2
let health1 = [100, 120, 110];
function hit(a) {
    a-=100; 
    return(a);
};
console.log(health1.map(hit)); 

// ES6
let health = [100, 120, 110];
let hit = (a) => {
    a-=100; 
    return(a); 
}
console.log(health.map(hit)); 

let abc = ['A', 1, 'B', 2, 'C', 3, 'D', 4, 'E',];
function sort(a) {
    if (a > 0)
        return false;
    else
        return true;
}
console.log(abc.every(sort));

//.every metod 1
let range = [20, 36, 26, -12, 38,];
function evenТumbered (a){
return a%2 == 0;
}
range.every(evenТumbered);

//ES6
[21, 36, 26, -12, 38,].every(a => a%2 == 0);

//.every metod 2
let rangeABC = ['A', 'B', 'c', 'C', 'D',];
function abc (a){
return a != 1; 
}
rangeABC.every(abc);


//ES6
let rangeABC2 = ['A', 'B', 'c', 1, 'C', 'D',];
rangeABC2.every(a => a != 1);

['A', 'B', 'c', 'C', 'D',].every(a => a != 1);

//.reduce metod 1
[3500, 3500, 3500, 3500, 3500,].reduce(function(a, b){
    return a + b;});
//ES6
[3500, 3500, 3500, 3500, 3500,].reduceRight((a, b) => a + b);

//.reduce metod 2
let salaryGrey = [15500, 17500, 12000, 13000, 9000,];
let min = salaryGrey.length*4500;
salaryGrey.reduce(function(a, b){
return a + b;
}, min );

//ES6 
let salaryGrey2 = [15500, 17500, 12000, 13000, 9000,];
let min = salaryGrey2.length*4500;
salaryGrey2.reduceRight((a, b) => a + b, min);


