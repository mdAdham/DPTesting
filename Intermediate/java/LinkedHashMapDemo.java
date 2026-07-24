import java.util.*;

public class LinkedHashMapDemo {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> persons = new LinkedHashMap<>();
        persons.put(101, "Adham");
        persons.put(102, "Santhosh");
        System.out.println(persons);
    }
}
