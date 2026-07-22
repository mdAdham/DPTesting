import java.io.FileWriter;

public class file {
    public static void main(String[] args) {
        try{
            
            FileWriter fw = new FileWriter("Student.txt");
            fw.write("Adham\n");
            fw.write("Age: 17\n");
            fw.close();
            System.out.println("Data Added Successfully");
        }catch(Exception e){
            System.out.println(e);
        }
    }
}