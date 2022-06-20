public class Boss extends Inimigo {
    String itemEspecial;

    public Boss(){}
    public Boss (int ataque, int defesa, int hp, String itemEspecial){

    super(ataque,defesa,hp);
    this.itemEspecial = itemEspecial;
    }
}
