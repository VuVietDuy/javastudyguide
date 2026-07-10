---
sidebar_position: 5
---

# Practice Questions


**Question 1: What is the output of the following program?**

```java
public class MultiDimArray {
    public static void main(String[] args) {
        int[][] arr = new int[2][3];
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                arr[i][j] = i + j;
            }
        }
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}

```

A. 
```
0 0 0 
0 0 0
```
B. 
```
0 1 2 
0 1 2
```
C. 
```
0 0 0 
1 1 1 
```
D. 
```
0 1 2 
1 2 3 
```

**Correct: D**: 

**Eplanation**:
```

```

**Question 2: Which of the following generic method definitions correctly declares a method that returns the first element of a given array?**

A. 
```java
public static T getFirstElement(T[] array) {
    return array[0];
}
```
B. 
```java
public static <T> T getFirstElement(T[] array) {
    return array[0];
}
```
C. 
```java
public static <T> getFirstElement(T[] array) {
    return array[0];
}
```
D. 
```java
public static <T> T[] getFirstElement(T[] array) {
    return array[0];
}
```

**Correct: B**: 

**Eplanation**:
```

```