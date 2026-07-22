import java.io.*;

public class bufferappend {
    public static void main(String[] args) throws Exception {
        BufferedWriter ba = new BufferedWriter(new FileWriter("FileName.txt", true));
        ba.newLine();
        ba.write("This Append Method of Bw");
        ba.newLine();
        ba.write("All work are done here");
        ba.close();
        System.out.println("Data Appended Successfully");
    }
}
