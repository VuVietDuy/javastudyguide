---
sidebar_position: 2
---

# Practice Questions

## 1. OOP

**Question 1: Which method calls will execute in this inheritance scenario?**

```java
    class Parent {
        public void show() { System.out.print("Parent "); }
    }
    class Child extends Parent {
        public void show() { System.out.print("Child "); }
        public static void main(String[] args) {
            Parent dad = new Child();
            dad.show();
            new Child().show();
            new Parent().show();
        }
    }
```

A. "Parent Parent Parent"

B. "Child Child Parent"

C. "Child Parent Child"

D. "Parent Child Parent"

E. "None of the above"

**Correct**: B

**Eplanation**:
```
Overidden methods in subclasses are exected according to the runtime type of the object
```

**Question 2: What is the output of this family membership code?**

```java
    var isMother = false;
    var isFather = false;
    if (isFather = isMother != isFather) {
        System.out.println("You are part of the family!");
    } else {
        System.out.println("You are not part of the family!");
    }
```

A. You are part of the family!

B. You are not part of the family!

C. Compilation error

D. Runtime exception

E. Unreachable code error

**Correct**: B

**Eplanation**:
```
The expression isFather = isMother != isFather is evaludated as isFather = (isMother != isFather)
```

**Question :**

```java

```

A. 

B. 

C. 

D. 

E. 

**Correct**: 

**Eplanation**:
```

```

**Question :**

```java

```

A. 

B. 

C. 

D. 

E. 

**Correct**: 

**Eplanation**:
```

```