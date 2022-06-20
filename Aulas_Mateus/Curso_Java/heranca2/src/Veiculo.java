public class Veiculo {
    protected String tipoDeCombustivel;
    private int porcentagemDeCombustivelNoTanque;
    private  String marca;

    //construtor é um método que retorna o objeto daquela classe, padrão do java retorna vazio
    public Veiculo(){

    }
    public Veiculo(String tipoDeCombustivel, int porcentagemDeCombustivelNoTanque){
        this.tipoDeCombustivel = tipoDeCombustivel;
        this.porcentagemDeCombustivelNoTanque = porcentagemDeCombustivelNoTanque;
        this.marca = marca;
    }
}
