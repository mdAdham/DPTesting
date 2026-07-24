import java.util.*;

class Students implements Comparable<Students>{
    String name;
    int id;
    Students(int id, String name){
        this.id = id;
        this.name = name;
    }

    public int compareTo(Students s){
        return this.id - s.id;
    }
}

public class comparableDemo {
    public static void main(String[] args) {
        ArrayList<Students> n = new ArrayList<>();

        n.add(new Students(103, "Adham"));
        n.add(new Students(102, "Santhosh"));
        n.add(new Students(104, "Anoushka"));
        n.add(new Students(104, "Manoj"));

        Collections.sort(n);
        System.out.println("Sort by id.");

        for (Students s : n){
            System.out.println(s.id+" "+s.name);
        }
    }
}
