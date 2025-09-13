import readline from "readline";
import { ReporteFactory } from "./reporte.factory.ts";
import type { ReporteFormato } from "./reporte.interface.ts";
import { EncabezadoDecorator } from "./encabezado.decorador.ts";
import { MarcaAguaDecorator } from "./marca-agua.decorador.ts";
import { CifradoDecorator } from "./cifrado.decorador.ts";
import { CompresionDecorator } from "./compresion.decorador.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  const factory = new ReporteFactory();

  const formatoInput = await preguntar("Ingrese el formato de reporte (pdf/excel/csv): ");
  const formato = formatoInput.toLowerCase() as ReporteFormato;

  const contenido = await preguntar("Ingrese el contenido del reporte: ");
  let reporte = factory.descargarReporte(formato, contenido );
  reporte = new EncabezadoDecorator(reporte);
  console.log("agregando encabezado.... \n\n", reporte.obtenerContenido(), "\n")
  reporte = new MarcaAguaDecorator(reporte);
  console.log("agregando marca de agua... \n\n", reporte.obtenerContenido(), "\n")
  reporte = new CifradoDecorator(reporte);
  console.log("agregando cifrado...\n\n", reporte.obtenerContenido(), "\n")
  reporte = new CompresionDecorator(reporte);
  console.log("agregando compression... \n\n", reporte.obtenerContenido(), "\n")


  rl.close();
}

main();
