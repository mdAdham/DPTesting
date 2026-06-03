import java.util.Scanner;

// public class Basic{
//     public static void main(String[] args){
//     for (int row = 7; row >= 0; row--){
//         for (int col = 1; col <= 8; col++){
//             System.out.print((char)(65 + row));
//             System.out.print((col) + " ");
//         }
//         System.out.println();  
//     }
// }
// }

public class Basic{
    public static void main(String[] args){
        for (int row = 0; row < 8; row++){
            for (int col = 0; col < 8; col++){
                if ((row + col) % 2 == 0){
                    System.out.print("White ");
                } else {
                    System.out.print("Black ");
                }
            }
            System.out.println();
        }
    }
}