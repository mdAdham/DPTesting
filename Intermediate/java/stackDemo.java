
// Stack
// Push
// Pop
// Peak

import java.util.Stack;

public class stackDemo {
    public static void main(String[] args) {
        Stack<String> st = new Stack<>();
        st.push("Hello");
        st.push("World");
        st.push("Hello");
        st.push("World");
        st.push("Hello");
        st.push("World");
        System.out.println(st);
        st.pop();
        System.out.println(st);
        System.out.println(st.peek());
    }
}
