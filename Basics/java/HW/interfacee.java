

interface Vehicle {
    void start();
}

class Bike implements Vehicle {
    public void start() {
        System.out.println("Bike started");
    }
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }
}

public class interfacee {
    public static void main(String[] args) {
        Vehicle car = new Car();
        car.start();
    }
}
