package Testing;


public class roughwork2 {
    public static void main(String[] args) {
        int [] a = {1,2,3,4,4,5,5};
        int [] b = {3,4,4,5,6,7,7};
        

        int lenA = a.length;
        int lenB = b.length;
        
        int startA = 0;
        int endA = lenA;
        int startB = 0;
        int endB = lenB;

        int ans [] = new int [lenA+lenB];
        int k = 0;
        while (startA < endA && startB < endB) {
            if (a[startA] < b[startB]) {
                ans[k] = a[startA];
                startA++;
                k++;
            } else {
                ans[k] = b[startB];
                startB++;
                k++;
            }
        }
        while (startA < endA) {
            ans[k] = a[startA];
            k++;
            startA++;
        }
        while (startB < endB) {
            ans[k] = b[startB];
            k++;
           startB++;
        }

        for (int i=0; i<ans.length; i++) {
            System.out.print(ans[i] +" ");
        }





        int [] c = {1,2,3,3,4,4,4,4,5,5,5,6,7,7};

        int [] ans2 = new int [ans.length + c.length];
        int startArr1 = 0;
        int endArr1 = ans.length;
        int startArr2 = 0;
        int endArr2 = c.length;
        
        int l = 0;
        while (startArr1 < endArr1 && startArr2 < endArr2) {
            if (ans[startArr1] < c[startArr2]) {
                ans2[l] = ans[startArr1];
                startArr1++;
            } else {
                ans2[l] = c[startArr2];
                startArr2++;
            }
            l++;
        }
        while (startArr1 < endArr1) {
            ans2[l] = ans[startArr1];
            l++;
            startArr1++;
        }
        while (startArr2 < endArr2) {
            ans2[l] = c[startArr2];
            l++;
            startArr2++;            
        }
        System.out.println();
        for (int i=0; i<ans2.length ; i++) {
            System.out.print(ans2[i] + " ");
        }
    }  
}