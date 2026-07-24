import java.util.*;

public class mapDemo {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        students.put(101, "Adham");
        students.put(102, "Santhosh");
        students.put(103, "Anoushka");

        System.out.println(students);
        System.out.println(students.get(102));
        
        students.remove(102);
        System.out.println(students.containsKey(102));
        System.out.println(students.containsValue("Anoushka"));
        System.out.println(students.size());
        System.out.println(students);

        students.putIfAbsent(102, "Mohammad");
        System.out.println(students);

        students.forEach((key, value) -> System.out.println(key+value));
    }
}
