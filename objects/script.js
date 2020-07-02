let person = {                                              //declare varibale and tell js it's an object by using an object literal {}
                                                            //in betweeen curly braces, we place properties (key:value pairs)
    name: 'Tessa',                                          //name is the key, Tessa is the value, together they are the property of the object
    age: '19',                                              //age is the key, 19 is the value, together they are the property
    height: '5 foot 4 inches'
}
console.log(person);
console.log(person.height);                                 //i can access specific values in an object using dot notation, which is objectName.propetyName
console.log(person["age"]);                                 //i can access specific values in an object using bracket notaton, which is objectName["propertyName"]