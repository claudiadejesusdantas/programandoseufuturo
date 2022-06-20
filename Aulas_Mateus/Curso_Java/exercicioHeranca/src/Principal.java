public class Principal {
    public static void main(String[] args) {
        Inimigo inimigo = new Boss(20, 20, 70, "odio");
    }
}
//Crie um projeto que contenha uma classe INIMIGO e as classes BOSS e INIMIGO COMUM (subclasses
//de inimigo).
//A classe inimigo deve conter os atributos int ataque, int defesa, int hp
//As classes inimigoCommum e Boss devem extender a classe inimigo
//A classe Boss deve ter um atributo só dela - String ItemEspecial