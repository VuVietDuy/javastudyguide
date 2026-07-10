---
sidebar_position: 1
---

# Functional Interfaces

Java 8 brought us lambda experssions, a new feature that aims to smplify development by taking a more functional programming approach. But for this to work, Java also introduced the concept of functional interfaces.

A functional interface is an interfacce that contains only one abstract method. They may contain one or more default methods or static methods, but there can be only one abstract method.

At first glance, you might think that using functional interfaces is not much different than using regular classes and objects. After all, we're been able to define interfaces with a single method for a long time.

Lambda expressions let you treat functionality as method arguments, or code as data. Instead of defining a class that implements a single-method interface, you can directly pass a lambda expression as an instance of a functional interface, allowing for cleaner and more concise code.

```java
public interface MyInterface {
    public void myMethod();
}

MyInterface ref = () -> System.out.println("Hello World!"); 
```

## The `@FunctionalInterface` Annotation

Java 8 also introduced the @FunctionalInterface annotation, which is used to indicate that an interface is intended to be a functional interface. It's a kind of hint to the compiler that you intend for this interface to adhere to the rules of a functional interface

```java
@FunctionalInterface
public interface MyInterface {
    void myMethod();
}
```

## Rules for Defining a Functional Interface

