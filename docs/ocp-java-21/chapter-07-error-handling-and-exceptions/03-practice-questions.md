---
sidebar_position: 4
---

# Practice Questions

**Question 1: Which of the following statements correctly describes a checked exception in Java**

A. A checked exception is a type of exception that inherits from the java.lang.RuntimeException class.

B. A checked exception must be either caught or declared in the method signature using the throws keyword.

C. A checked exception is an error that is typically caused by the environment in which the application is running, and it cannot be handled by the application.

D. A checked exception can be thrown by the Java Virtual Machine when a severe error occurs, such as an out-of-memory error.

**Correct: B**

**Quesion 2: Which of the following code snippets correctly defines and throws a custom checked exception**

```java
public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class TestCustomException {
    public static void main(String[] args) {
        try {
            methodThatThrowsException();
        } catch (CustomException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void methodThatThrowsException() throws CustomException {
        throw new CustomException("This is a custom checked exception");
    }
}
```
A. This code defines a custom checked exception and correctly throws and handles it.

B. This code defines a custom unchecked exception.

C. This code will not compile because the custom exception is not declared correctly in the method signature.

D. This code will compile but will not throw the custom exception at runtime.

**Correct: A**

**Explanation:**
The code defins a custom checked exception by extending `Exception`. The `methodThatThrowException` method throws this custom exception, which is then caught and handled in the `main` method.

**Quesion 3: Given the following class, what is the results**
```java
public class Main {
    protected static int myMethod() {
        try {
            throw new RuntimeException();
        } catch(RuntimeException e) {
             return 1;
        } finally {
             return 2;
        }
    }
    public static void main(String[] args) {
        System.out.println(myMethod());
    }
}
```
A. `1`

B. `2`

C. Compilation fails

D. An exception occurs at runtime

**Correct: B**

**Explanation:**
The `finally` block always executes and its return value overrides the return value from the `catch` block, resulting in `2` being printed.