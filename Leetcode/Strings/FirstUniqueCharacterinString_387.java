package Leetcode.Strings;

public class FirstUniqueCharacterinString_387 {
    public static void main(String[] args) {
        String s = "leetcode";
        int ans = firstUniqChar(s);
        System.out.println(ans);
    }

    public static int firstUniqChar(String s) {
        int[] freq = new int[26];
        char[] ch = s.toCharArray();

        for (char c : ch) {
            freq[c - 'a']++;
        }
        // leetcode
        // 01234567
        // for (char c : ch) {
        // freq['l'-'a'] = freq['l'-'a'] + 1;
        // freq[108-97] = 11
        // freq[11] = freq[11]+1
        // }

        // freq[6] = freq[0]+1

        // [0,0,0,0,2,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0]
        for (int i = 0; i < ch.length; i++) {
            if (freq[ch[i] - 'a'] == 1) {
                return i;
            }
        }
        return -1;
    }

}
