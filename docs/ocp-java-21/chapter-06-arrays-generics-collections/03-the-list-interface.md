---
sidebar_position: 3
---

# The `List` Interface

The List interface represents an ordered collection that allows duplicate elements. The two main implementations of List are ArrayList and LinkedList. While both classes implement the same interface, they have different performance characteristics.

An `ArrayList` is backed by a dynamic array, which provides amortized constant-time performance for the basic operations, assuming the index is known. However, inserting or removing elements form middle of an `ArrayList` can be slow, as is requireds shifting all the subsequent elementsm, resulting in `O(n)` complexity.

On the other hand, a LinkedList stores its elements in a doubly-linked list. This provides constant-time performance for insertion and deletion operations at both ends of the list.

## Creating a `List`

The most common approach to create a List instance is to use a constructor

```java
List<String> fruits = new ArrayList<>();
List<String> vegetables = new LinkedList<>();
```

You can also create a `List` from an array using the `Array.asList` method:

```java
String[] fruitArray = {"apple", "banana", "orange"};
List<String> fruits = Arrays.asList(fruitArray);
```

Note that the `List` returned by `Array.asList` is backed by original array, so any changes made to the array will be reflected in the `List`, and vice versa. Additionally, this `List` has a fixed size, so you cannot add or remove elements.

You can also use the factory methods `List.of` and `List.copyOf` to create unmodifiable lists:

