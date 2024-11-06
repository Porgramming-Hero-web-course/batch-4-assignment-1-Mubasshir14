{
    // 

    function getProperty<T, Q extends keyof T>(object: T, key: Q): T[Q] {
        return object[key];
    }


    // const person = {
    //     name: "Alice",
    //     age: 30
    // };

    // const result = getProperty(person, "name");
    // console.log(result);

    // 
}