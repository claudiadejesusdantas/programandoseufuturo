public class Principal {

        public static int soma(int valor1, int valor2) {
                return valor1 + valor2;
        }

        public static int subtracao(int valor1, int valor2) {
                return valor1 - valor2;
        }

        public static int multiplicacao(int valor1, int valor2) {
                return valor1 * valor2;
        }
        public static float divisao(int valor1,int valor2) {
                if(valor2 == 0){
                        System.out.println("Impossível dividir por zero...");
                        return 0;
                }
                return valor1 / valor2;
//        {
//        return (valor2 == 0) ? 0 : valor1 /valor2;
//      }


    public static void main(String[] args) {

    }
}
