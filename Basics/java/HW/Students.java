import java.util.Scanner;

class Student {
    String name;
    int age;
    int id;

    void EnterInformation() {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter name: ");
        name = s.nextLine();
        System.out.print("Enter Age: ");
        age = s.nextInt();
        System.out.print("Enter ID: ");
        id = s.nextInt();
        
        s.close();
    }

    void DisplayInformation() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("ID: " + id);
    }
}

public class Students {
    public static void main() {
        Student s = new Student();
        s.EnterInformation();
        s.DisplayInformation();
    }
}
