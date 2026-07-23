import java.util.*;

// Tree Set sorts + Remove Duplicates

public class TreeSetDemo {
    public static void main(String[] args) {
        TreeSet<String> fruits = new TreeSet<>();
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Apple");
        System.out.println(fruits);
    }
}