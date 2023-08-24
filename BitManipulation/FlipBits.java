package BitManipulation;


public class FlipBits {
    public static void main(String[] args) {
        int n = 97;
        String str = Integer.toBinaryString(n);
        StringBuilder sb = new StringBuilder();
        // System.out.println(str+" str ");
        for (int i=0; i<str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == '0') {
                sb.append('1');
            } else {
                sb.append('0');
            }
        }
        int decimal=Integer.parseInt(sb.toString(),2);  
        System.out.println(decimal);
        // int decimal=Integer.parseInt("101",2);  
        // System.out.println(decimal);
    }
}

