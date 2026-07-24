import java.util.*;;

class NewStudents {
    int age;
    String Name;
    int id;
    NewStudents(int age, int id, String Name){
        this.id = id;
        this.age = age;
        this.Name = Name;
    }
}

class AgeSort implements Comparator<NewStudents>{
    public int compare(NewStudents a, NewStudents b){
        return a.age-b.age;
    }
}

public class comparatorDemo {
    public static void main(String[] args) {
        ArrayList<NewStudents> n = new ArrayList<>();
        n.add(new NewStudents(17, 101, "Adham"));
        n.add(new NewStudents(18, 102, "Santhosh"));
        n.add(new NewStudents(16, 103, "Anoushka"));
        n.add(new NewStudents(20, 104, "Sanjana"));

        Collections.sort(n, new AgeSort());
        System.out.println("Sort By Age");
        for (NewStudents s : n) {
            System.out.println(s.age + " " + s.Name + " " + s.id);
        }
    }
}
