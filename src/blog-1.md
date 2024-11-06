# The significance of union and intersection types in Typescript.
TypeScript makes JavaScript safer and more manageable by adding types. Two key types that give TypeScript its flexibility are Union Types and Intersection Types. Let’s explore these types in simple terms with examples.


## What is a Union Type?
A Union Type is a variable hold more than one type of value. This is useful when a value might come in different forms and we want TypeScript to enforce that it must match one of these types. The | symbol joins multiple types together in a union.

### Example 1:
```typescript
type ExampleType = Type1 | Type2;
Here ExampleType variable can be a string or number
```
### Example 2:
```typescript
let value: string | number;
value = "Mubasshir"; 
value = 123;      
value = true;     // wrong, as the value can be either string or number
```

### Union Type in a Function:
```typescript
function printValue(value: string | number) {
  console.log(value);
}
printValue("Mubasshir"); 
printValue(23);       
```

## What is an Intersection Type?
An Intersection Type combines multiple types into one, meaning a value must have all the properties of each type. This is useful when you want an object to have combined features from different types.

### Example 1:
```typescript
type CombinedType = Type1 & Type2;
The & symbol combines types in an intersection.
```

### Example 2:
If user want to combine Person type and an Employee type:
```typescript
type Person = { name: string };
type Employee = { role: string };
type EmployeeDetails = Person & Employee;
const employee: EmployeeDetails = {
  name: "Mubasshir",
  role: "Developer"
};
```
Here employee must have both name and role properties.

## Why Use Union and Intersection Types?
Flexibility: Union types allow multiple types, while intersection types ensure combined properties.
Safety: TypeScript catches errors early if the value doesn’t match the expected types.
Readability: Using these types makes it clear what values and structures are allowed.

Union and Intersection types help make TypeScript code more flexible, safe, and easy to understand, providing the best of both flexibility and structure.