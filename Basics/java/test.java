import java.util.Scanner;

public class test{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number:");
        int num = sc.nextInt(); 
        System.out.println("You entered: " + num);

        System.out.print("Enter a string:");
        String str = sc.next();
        System.out.println("You entered: " + str);
        sc.close();

    }
}