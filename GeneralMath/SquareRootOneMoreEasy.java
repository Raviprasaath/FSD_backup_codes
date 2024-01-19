package GeneralMath;

public class SquareRootOneMoreEasy {
    public static void main(String[] args) {
        int[] numbers = {13, 14, 15, 16, 17, 18, 19, 20};

        for (int number : numbers) {
            double squareRoot = findSquareRoot(number);
            System.out.println("Square root of " + number + ": " + squareRoot);
        }
    }
    
    public static double findSquareRoot(int number) {
        double estimate = 1.0;  // Initial estimate
        double previousEstimate = 0.0; // Previous estimate for comparison
        double precision = 1e-15; // A small value for precision

        while (!(estimate - previousEstimate < precision && 
                previousEstimate - estimate < precision)) {
            previousEstimate = estimate;
            estimate = 0.5 * (estimate + number / estimate);
        }
        return estimate;
    }
}
