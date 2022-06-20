import java.util.Scanner;
public class Principal {

    public static void main(String[] args) {

      //  Scanner scan = new Scanner(System.in);
        Aluno aluno1  = new Aluno();
        aluno1.nome = "Claudia";
        aluno1.idade = 28;
        aluno1.nota = 10;
        Aluno aluno2  = new Aluno();
        aluno1.nome = "Wallace";
        aluno1.idade = 23;
        aluno1.nota = 10;
        Aluno aluno3  = new Aluno();
        aluno1.nome = "Robson";
        aluno1.idade = 34;
        aluno1.nota = 10;
        Aluno aluno4  = new Aluno();
        aluno1.nome = "Fernando";
        aluno1.idade = 30;
        aluno1.nota = 10;
        Aluno aluno5  = new Aluno();
        aluno1.nome = "Rhuandro";
        aluno1.idade = 34;
        aluno1.nota = 10;
        Aluno aluno6  = new Aluno();
        aluno1.nome = "Daniel";
        aluno1.idade = 19;
        aluno1.nota = 10;

        Professor professor = new Professor();
        professor.nome = "Mateus";
        professor.idade = 24;
        professor.disciplina = "Programação Orientada a Objetos";

        Disciplina disciplina = new Disciplina();
        disciplina.nome="Programação Orientada a Objetos";
        disciplina.alunos[0] = aluno1;
        disciplina.alunos[1] = aluno2;
        disciplina.alunos[2] = aluno3;
        disciplina.alunos[3] = aluno4;
        disciplina.alunos[4] = aluno5;
        disciplina.alunos[5] = aluno6;


     //   System.out.println("Digite seu nome: ");
     //   aluno1.nome= scan.nextLine();

      //  System.out.println("Digite sua idade: ");
      //  aluno1.idade = scan.nextInt();

     //   System.out.println("Digite sua nota: ");
     //   aluno1.nota= scan.nextFloat();

       // System.out.println(nome);
    }
}
