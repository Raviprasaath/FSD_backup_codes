package GeneralMath;


public class GCD {
    public static void main(String[] args) {
        int a = 6;
        int b = 20;
        System.out.println(gcdNum(a,b));        
    }
		
	public static int gcdNum(int a, int b){
        if(b==0){
            return a;
        }
        return gcdNum(b, a%b);
    }
}
