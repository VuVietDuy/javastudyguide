---
sidebar_position: 1
---

# Understanding Exceptions

Being able to run a program í not the same as running the program correctly. Any non-trivial program is susceptible to errors. Errors in user input, mathematical operations, and accessing resources, etc.

## Exception Types

Most common exception classes in Java are subtypes of the `java.lang.Exception` class. But that's not the whole story. To really understand exceptions, we need to look at the exception hierarchy:

```
                         ┌───────────┐
                         │ Throwable │
                         └─────┬─────┘
                               │
                   ┌───────────┴───────────┐
                   │                       │
           ┌───────────────┐       ┌───────────────┐
           │   Exception   │       │     Error     │
           └───────┬───────┘       └───────────────┘
                   │
       ┌───────────┴───────────┐
       │                       │
┌──────────────────┐   ┌───────────────────┐
│ RuntimeException │   │ Checked Exceptions│
└──────────────────┘   └───────────────────┘
```

Exceptions are conditions that a reasonable application might want to catch and handle. The typically represent conditions that, while unusual, are not entirely unexpected.

Errors, on the other hand, are not meant to be caught or handled by your program. They indicate serious problems that a reasonable application should not try catch. Most such errors are abnormal conditions. For example, if application runs out of memory, an `OutOfMemoryError` will be thrown.

Checked exceptions are exceptional conditions that a well-written application should anticipate and handle. These are typically exceptions that are outside the control of the program.

Unchecked exceptions are exceptional conditions that the application usually cannot anticipate or recover from.

## Throwing an Exception

```java
throw new ExceptionType(messageString);
```

## Custom exceptions

```java
public class XMLFileParseException extends Exception {
  public XMLFileParseException(String message) {
    super(message);
  }
}
```

## Exceptions and Methods

### Overrinding Methods with Exceptions

When yo override a method in a subclass, you're allowed to declare that the method throws fewer checked exceptions than the method you're overriding

```java
class Parent {
    public void doSomething() throws IOException, SQLException {
        // ...
    }
}

class Child extends Parent {
    @Override
    public void doSomething() throws IOException {
        // ...
    }
}
```