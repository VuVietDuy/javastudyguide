---
sidebar_position: 5
---

# Practice Questions

### 1. What will be the output of the following program?

```java
public class IfStatementTest {
    public static void main(String[] args) {
        int x = 10;
        if (x > 5) {
            if (x < 20) {
                System.out.println("x is between 5 and 20");
            }
        } else {
            System.out.println("x is 5 or less");
        }
    }
}
```

A) x is between 5 and 20

B) x is 5 or less

C) x is greater than 20

D) The program does not compile

E) The program compiles but does not produce any output

a. Mục đầu tiên
b. Mục thứ hai
c. Mục thứ ba
=> A

### 2. Given the following code:
```java
record Person(String name, int age) {}
record Employee(int id, Person person) {}

public class RecordPattern {
    public static void main(String[] args) {
        Employee emp = new Employee(1001, new Person("Alice", 30));
                                            
        // Insert code here
    }
}
```
Which of the following options correctly uses record pattern matching in ann if statement to extract and print the name and age  of Person record in Java 21?

# Answers

### 1. The correct answer is A
