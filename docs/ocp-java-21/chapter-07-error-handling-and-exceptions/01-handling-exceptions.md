---
sidebar_position: 2
---

# Handling Exceptions

When an exception occurs in your Java program, you need to handle it to prevent your program from abruptly terminating. This is done using `try-catch` blocks.

## The `try-catch` Block

The basic syntax of a try-catcch block is as follows:

```java
try {
    // code that might throw an exception
} catch (ExceptionType e) {
    // code to handle the exception
}
```

Example:

```java
try {
    File file = new File("example.txt");
    Scanner scanner = new Scanner(file);
    while (scanner.hasNext()) {
        System.out.println(scanner.nextLine());
    }
    scanner.close();
} catch (FileNotFoundException e) {
    System.out.println("File not found: " + e.getMessage());
}
```

You can use multiple `catch` blocks to handle different types of exceptions. If an exception occurs in the `try` block, Java will search for the first `catch` block that can handle the exception, starting from the top.

```java
try {
    // code that might throw exceptions
} catch (IOException e) {
    // handle IOException
} catch (SQLException e) {
    // handle SQLException
}
```

You can also catch multiple exceptions in a single `catch` block. This is known as a `multi-catch` block.

```java
try {
    // code that might throw exceptions
} catch (IOException | SQLException e) {
    // handle either IOException or SQLException
}
```

## The `finally` Block

The `finally` block is used to execute code that should always run, regardless of whether an exception was thrown or not:

```java
try {
    // code that might throw an exception
} catch (ExceptionType e) {
    // handle the exception
} finally {
    // code that always runs
}
```

The finally block is offen used or cleanup tasks, such as closing files or database connections.

If a return statement is executed inside the try block, the finally block will still execute before the method returns:

```java
public static int returnTest() {
    try {
        return 1;
    } catch (Exception e) {
        return 2;
    } finally {
        System.out.println("Finally block");
    }
}
```

The same is true if the `return` statement is in a `catch` block, the `finally` block will still execute before the method returns.


