import java.util.Scanner;

public class Principal {

    //programa que calcula quatro notas e calcula a média aritmética

    public static void main(String[] args) {
        int nota1;
        int nota2;
        int nota3;
        int nota4;

        Scanner scan = new Scanner(System.in);

        System.out.println("Digite a primeira nota: ");
        nota1 = scan.nextInt();
        System.out.println("Digite a segunda nota: ");
        nota2 = scan.nextInt();
        System.out.println("Digite a terceira nota: ");
        nota3 = scan.nextInt();
        System.out.println("Digite a quarta nota: ");
        nota4 = scan.nextInt();

        int media = (nota1+nota2+nota3+nota4)/4;
        System.out.println(media);




    }
}
