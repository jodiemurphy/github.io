import java.io.File;  // Import the File class
import java.io.FileNotFoundException; 
import java.util.Scanner;
public class Day1Challenge { 
    public static void main(String[] args) {
        int counter = 0;

        //find out how many lines in file
        try {
          File myObj = new File("Challenge1_input.txt");
          Scanner myReader = new Scanner(myObj);
          while (myReader.hasNextLine()) {
            String data = myReader.nextLine();
            counter++;
          }
          myReader.close();
        } catch (FileNotFoundException e) {
          System.out.println("An error occurred.");
          e.printStackTrace();
        }

        //store lines in an array
        String[] lines = new String[counter];
        int lineNumber = 0;
        try {
          File myObj = new File("Challenge1_input.txt");
          Scanner myReader = new Scanner(myObj);
          while (myReader.hasNextLine()) {
            String data = myReader.nextLine();
            lines [lineNumber] = data;
            lineNumber++;
          }
          myReader.close();
        } catch (FileNotFoundException e) {
          System.out.println("An error occurred.");
          e.printStackTrace();
        }

        // remove all non-numeric numbers - find first and last number - combine them as string - then parse to int and add to total
        int totalSum =0;
        for (int i=0;i<lines.length;i++){
            String code = lines[i];
            String numberOnly = code.replaceAll("[^0-9]","");
            String firstNumber = numberOnly.substring(0,1);
            String secondNumber = numberOnly.substring(numberOnly.length()-1,numberOnly.length());
            String sumFirstLast = firstNumber + secondNumber;
            totalSum += Integer.parseInt(sumFirstLast);
        }
        
        System.out.println(totalSum);

        //answer is 54697

        //Part 2
        int totalSum2 =0;
        String[] numbers = {"oneight","twone","threeight","fiveight","sevenine","eightwo","eighthree","nineight","one", "two", "three", "four","five","six","seven","eight","nine"};
        String[] correctNumbers = {"18","21","38","58","79","82","83","98","1","2","3","4","5","6","7","8","9"};
        for (int i=0;i<lines.length;i++){
            String code = lines[i];
            for (int j=0;j<numbers.length;j++){
                String toReplace = numbers[j];
                String replaceWith = correctNumbers[j];
                code = code.replace(toReplace,replaceWith);
            }
            String numberOnly = code.replaceAll("[^0-9]","");
            String firstNumber = numberOnly.substring(0,1);
            String secondNumber = numberOnly.substring(numberOnly.length()-1,numberOnly.length());
            String sumFirstLast = firstNumber + secondNumber;
            totalSum2 += Integer.parseInt(sumFirstLast);
        }
        System.out.println(totalSum2);

        //answer is 54885
    }
        
}