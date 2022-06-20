public class Caixa<D> {
    private  D dado;

    public Caixa(D dado){
        this.dado = dado;
    }

    public void imprimeDados(){
        System.out.println("O dado foi recebido "+ this.dado);
    }
    public void setDado1(D dado){
        this.dado = dado;
    }


}
