import java.util.*;
//Store *cricket player jersey numbers* and player names using LinkedHashMap.

public class task2 {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> players = new LinkedHashMap<>();

        players.put(07, "Dhoni");
        players.put(18, "Virat");
        players.put(67, "Adham");

        System.out.println(players);
    }
}
