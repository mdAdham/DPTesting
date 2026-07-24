import java.util.*;
import java.io.*;

class Person implements Serializable{
    int id;
    String name;
    Person(int id, String name){
        this.id = id;
        this.name = name;
    }
}

public class deserializeDemo {
    public static void main(String[] args) throws Exception{
        FileInputStream fis = new FileInputStream("person.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Person p = (Person)ois.readObject();
        ois.close();
        System.out.println(p.id);
        System.out.println(p.name);
    }
}