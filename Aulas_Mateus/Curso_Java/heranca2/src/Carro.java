public class Carro extends Veiculo{
    public String marca;
    public Carro(){}
    public Carro(String tipoDeCombustivel, int porcentagemDeCombustivelNoTanque, String marca){
        //super-> utilizado método ou atributo que não está na sua classe

        super(tipoDeCombustivel, porcentagemDeCombustivelNoTanque);
        this.marca = marca;
    }
}
