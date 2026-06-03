import java.util.Scanner;

class Mobile {
    String brand;
    String model;
    float price;

    void EnterInformation() {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter Mobile Brand: ");
        brand = s.nextLine();
        System.out.print("Enter Mobile Model: ");
        model = s.nextLine();
        System.out.print("Enter Mobile Price: ");
        price = s.nextFloat();
        s.close();
    }

    void DisplayInformation() {
        System.out.println("Brand = " + brand);
        System.out.println("Model = " + model);
        System.out.println("Price = " + price);
    }
}

public class Mobiles {
    public static void main() {
        Mobile m = new Mobile();
        m.EnterInformation();
        m.DisplayInformation();
    }
}
