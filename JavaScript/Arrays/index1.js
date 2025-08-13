let person={
    name:'Abhiram',
    age:30,
    loc:'hyd',
    car:{
        name:'swift',
        made:2020,
        color:'black'
    }
}

person.edu='B.Tech'
console.log(person);
delete person.edu;
console.log(person);

for(let x in person){
    console.log(x);
    
}


let k=Object.keys(person);
console.log(k);

let v=Object.values(person)
console.log(v);

for(let x in person){
    console.log(x+':'+person[x]);
    
}



Object.freeze(person);
console.log(Object.isFrozen(person));
person.job='Eng';
console.log(person);