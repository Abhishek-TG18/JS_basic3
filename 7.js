
let userMap = new Map();


function addUserRecord(name, age, email) {
    userMap.set(email, { name: name, age: age, email: email });
}


function updateUserRecord(email, newName, newAge) {
    if (userMap.has(email)) {
        let userInfo = userMap.get(email);
        userInfo.name = newName;
        userInfo.age = newAge;
        userMap.set(email, userInfo);
    } else {
        console.log("User not found with email:", email);
    }
}


function deleteUserRecord(email) {
    if (userMap.has(email)) {
        userMap.delete(email);
        console.log("User with email", email, "deleted successfully.");
    } else {
        console.log("User not found with email:", email);
    }
}


addUserRecord("John Doe", 30, "john@example.com");
addUserRecord("Jane Smith", 25, "jane@example.com");

console.log("Initial user records:");
console.log(userMap);

updateUserRecord("john@example.com", "John Doe Jr.", 31);
console.log("User record after update:");
console.log(userMap);

deleteUserRecord("jane@example.com");
console.log("User records after deletion:");
console.log(userMap);
