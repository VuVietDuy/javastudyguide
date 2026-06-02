---
sidebar_position: 1
---

# Introduction to Object-Oriented Programming

Object-oriented programming(OOP) is a program paradigm centerd around the concept of objects. Rather than structure program around procedures and function, OOP organizes code into objects, which represent real-world entities containing data (attributes) and behaviors (methods). This approach offers serveral advantages:

- Improved organization and modularity
- Code reuse through inheritance
- Real-world modeling

Java is an OOP language, so its basic building blocks are objects and classes

# Objects and Classes

Onjects are distict instances in code that contain data and behavior. Classes, on the other hand, are blueprints or templates that define the data and behaviors common to all objects of that class

For example: 

```java
public class Cookie {
  String flavor;
  int size;

  public void eat() {
    System.out.println("That was yummy!");
  }
}
```

And we can instantiate cookie objects from the Cookie class:

```java
Cookie chocoChip =  new Cookie();
chocoChip.flavor = "Chocolate Chip";
chocoChip.size = 2;
```

## Higher-Level OOP Principles

Once you understand objects and classes, grasping the higher-level principles of OOP, like inheritance, encapsulation, and polymorphism, becomes easier:

- Inheritance
- Encapsulation
- Polymorphism