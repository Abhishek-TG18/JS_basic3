function search(obj, key) {
    if(obj.hasOwnProperty(key)) {
        console.log("The specified object has the key", key);
    }
}

let student = {
    name: "abhishek",
    age: 19,
    grade: "A+"
};

search(student, "age");
