package BitManipulation;

public class IntegerToBinary {
    public static void main(String[] args) {
        int n = 10;
        String str = Integer.toBinaryString(n);
        System.out.println(str); 

        String binaryNum = "";
        while (n != 0) {
            binaryNum = n%2 + binaryNum;
            n = n /2 ;
        }
        System.out.println(binaryNum);


        // convert to decimal
        String binary = "01011011";
        int decimal = Integer.parseInt(binary, 2);
        // System.out.println(decimal);



    }
}
