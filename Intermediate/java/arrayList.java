// Dynamic Array
// Allow duplicate
// Maintain the insertion order
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class arrayList{
    public static void main(String[] args) {
        ArrayList<String> userNames = new ArrayList<>();

        Collections.addAll(userNames, "Test", "Sanjana", "Rohan");

        userNames.add("Adham");
        userNames.add("Santhosh");
        userNames.add("Anoushka");

        System.out.println(userNames);

        userNames.remove("Rohan");

        System.out.println(userNames);

        userNames.set(0, "Tamil");

        System.out.println(userNames);

        System.out.println(userNames.get(1));
        System.out.println(userNames.size());
        System.out.println(userNames.contains("Tamil"));

        for (String s : userNames){
            System.out.println(s);
        }



        userNames.clear();
        System.out.println(userNames);
    }
}