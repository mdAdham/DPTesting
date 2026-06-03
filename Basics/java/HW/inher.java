

class Father {
    float money = 20000;
}

class Son extends Father {
    float money = 10000;
    
    void PrintMyWorth(){
        System.out.println("I have " + (this.money + super.money) + " rupees");
    }
}

public class inher {
    public static void main() {
        Son s = new Son();
        s.PrintMyWorth();
    }
}