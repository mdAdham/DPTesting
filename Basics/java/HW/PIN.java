
class Password {
    private int password;

    Password(int password) {
        this.password = password;
    }

    void ChangePassword(int oldPassword, int newPassword) {
        if (password == oldPassword){
            password = newPassword;
            System.out.println("password changed successfully");
        }
        else{
            System.out.println("wrong password");
        }
    }

}

public class PIN {
    public static void main() {
        Password p = new Password(1234);
        p.ChangePassword(2345, 4321);
    }
}
