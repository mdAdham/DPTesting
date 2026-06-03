//Part One 
interface Sport {
    void play();
}
interface Cultral {
    void dance();
}
interface Disipline {
    void followrules();
    void study();
}

//Part Two  
class Student implements Sport, Cultral, Disipline {
    public void play() {
        System.out.println("playing");
    }
    public void dance() {
        System.out.println("dancing");
    }
    public void followrules() {
        System.out.println("following rules");
    }
    public void study() {
        System.out.println("studying");
    }
}

//part Three  
public class studentt {
    public static void main() {
        float f = 10.0f;
        float s2 = f / 0;
        
        System.out.println(s2);
        Student s = new Student();
        s.play();
        s.dance();
        s.followrules();
        
        s.study();
    }
}