import java.io.*;

public class bufferfiles {
    public static void main(String[] args) throws Exception{
        BufferedWriter bw = new BufferedWriter((new FileWriter(("FileName.txt"))));
        bw.write("Hello Welcome");
        bw.newLine();
        bw.write("This Buffer Method");
        bw.close();
        System.out.println("data Written Successfully");
    }
}