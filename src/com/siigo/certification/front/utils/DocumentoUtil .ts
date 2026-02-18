export class DocumentoUtil {

    static resolverNumeroDocumento(valor: string, longitud: number = 10): string {

        if (valor === "Random") {
            const min = Math.pow(10, longitud - 1);
            const max = Math.pow(10, longitud) - 1;
            return Math.floor(Math.random() * (max - min + 1) + min).toString();
        }

        return valor;
    }

}
