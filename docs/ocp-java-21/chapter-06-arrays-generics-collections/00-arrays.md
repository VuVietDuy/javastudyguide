---
sidebar_position: 1
---

# Arrays

To create an array, you have to declare a variable of the desired array type and the use the `new` keyword to create the array object and assign it to the variable:

```java
// Creates an array of integers
int[] myArray; 
myArray = new int[5];
```

You can also combine the declaration and the creation of the array in one statement:

```java
int[] myArray = new int[5];
```

The number inside the brackets specifies the number of elements the array will hold, in other words, the size off array. This site must be decided when the array is created and cannot be changed later.

This is an inportant limitation to keep in mind, you cannot resize an array after it has been created.