class LaptopClass {
    public static int no_of_lap_created = 0;

    String BrandandModel;
    float Price;

    LaptopClass(String brand_model, float price) {
        BrandandModel = brand_model;
        Price = price;
        no_of_lap_created++;
    }

    void DisplayInformation() {
        System.out.println("Brand_Model = " + BrandandModel);
        System.out.println("Price = " + Price);
        System.out.println("Number of Laptops created = " + no_of_lap_created);
    }
}

public class Laptop {
    public static void main() {
        LaptopClass lap1 = new LaptopClass("ASUS A99", 80000);
        LaptopClass lap2 = new LaptopClass("ASUS A99", 80000);
        LaptopClass lap3 = new LaptopClass("ASUS A99", 80000);
        lap1.DisplayInformation();
    }
}
