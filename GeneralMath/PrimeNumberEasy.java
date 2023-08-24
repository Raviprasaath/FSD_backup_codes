package GeneralMath;

public class PrimeNumberEasy {
    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }

        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int start = 20; // Start of the range
        int end = 50; // End of the range
        for (int i = start; i <= end; i++) {
            if (isPrime(i)) {
                System.out.println(i + " ");
            }
        }
    }
}
