package Testing;
public class roughwork {
    public static void main(String[] args) {
        String [] str = {"flower","flow","flight"};
        System.out.println(longestCommonPrefix(str));
    }
    public static String longestCommonPrefix(String[] strs) {
        StringBuilder sb = new StringBuilder();
        sb.append(strs[0]);
        int count = 0;
        for (int i=0; i<strs.length; i++) {
            if (sb.toString().contains(strs[i])) {
                count++;
            } else {
                count = 0;
                sb.delete(sb.length()-2, sb.length());
                System.out.println(sb);
            }
        }
        return count != 0 ? sb.toString() : ""; 
    }
    
}