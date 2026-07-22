import java.io.*;

public class displayFIle {
    public static void main(String[] args) throws Exception {  
        File f = new File("FileName.txt");
        if(f.exists()){
            System.out.println("File Name is: " + f.getName());
            System.out.println("File Path is: " + f.getAbsolutePath());
            System.out.println("File Readable: " + f.canRead());
            System.out.println("File Writable: " + f.canWrite());
            System.out.println("File Size: " + f.length());
        }
    }
}
