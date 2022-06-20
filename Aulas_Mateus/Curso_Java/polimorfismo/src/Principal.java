public class Principal {
    public static void main(String[] args) {
        ProvaOlimpica provaOlimpica = new ProvaOlimpica();

        Enxadrista enxadrista1 = new Enxadrista();
        Enxadrista enxadrista2 = new Enxadrista();

        provaOlimpica.realizarProva(enxadrista1,enxadrista2);
        provaOlimpica.realizarProva(new Judoca(),new Judoca());

    }
}
