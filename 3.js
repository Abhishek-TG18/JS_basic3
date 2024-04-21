let student ={
    name:"abhishek",
    age:19,
    grade:"A+",
};

function count(obj){
        let count=0;
        for (const key in obj) {
                count++;
            
        }
        return count;
}

console.log(count(student));