let object = {
    make:"xyz",
    model:"zzz",
    year:2023.
}

for (const key in object) {
   console.log(key,"->",object[key]);
}