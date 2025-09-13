import readline from "readline";
import { ReporteFactory } from "./tipos-reportes/reporte.factory.ts";
import type { ReporteFormato } from "./tipos-reportes/reporte.interface.ts";
import { EncabezadoDecorator } from "./formatos-reportes/encabezado.decorador.ts";
import { CifradoDecorator } from "./formatos-reportes/cifrado.decorador.ts";
import { MarcaAguaDecorator } from "./formatos-reportes/marca-agua.decorador.ts";
import { CompresionDecorator } from "./formatos-reportes/compresion.decorador.ts";
import { EntregaCorreo } from "./envios-reportes/entrega-correo.ts";
import { EntregaAPI } from "./envios-reportes/entrega-api.ts";
import { EntregaCarpeta } from "./envios-reportes/entrega-carpeta.ts";
import { BasicoProcesamiento } from "./procesamiento-reportes/procesamiento-basico.ts";
import { DetalladoProcesamiento } from "./procesamiento-reportes/procesamiento-detallado.ts";
import { EncriptadoProcesamiento } from "./procesamiento-reportes/procesamiento-encriptado.ts";
import { Usuario, type TipoUsuario } from "./procesamiento-reportes/usuario.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  const tipoUsuarioInput = await preguntar("Seleccione tipo de usuario (Ejecutivo/Auditor/Analista): ");
  const tipoUsuario = tipoUsuarioInput.trim() as TipoUsuario;

  let estrategia;
  switch (tipoUsuario) {
    case "Ejecutivo":
      estrategia = new BasicoProcesamiento();
      break;
    case "Auditor":
      estrategia = new DetalladoProcesamiento();
      break;
    case "Analista":
      estrategia = new EncriptadoProcesamiento();
      break;
    default:
      console.log("Tipo de usuario no válido. Se asigna BasicoProcesamiento por defecto.");
      estrategia = new BasicoProcesamiento();
  }

  const usuario = new Usuario("Usuario Terminal", tipoUsuario, estrategia);

  const entregaInput = await preguntar("Seleccione mecanismo de entrega (correo/api/carpeta): ");
  let entrega;
  switch (entregaInput.toLowerCase()) {
    case "correo":
      entrega = new EntregaCorreo();
      break;
    case "api":
      entrega = new EntregaAPI();
      break;
    case "carpeta":
      entrega = new EntregaCarpeta();
      break;
    default:
      console.log("Entrega no válida, se asigna correo por defecto.");
      entrega = new EntregaCorreo();
  }

  const factory = new ReporteFactory(entrega);

  const formatoInput = await preguntar("Ingrese el formato de reporte (pdf/excel/csv): ");
  const formato = formatoInput.toLowerCase() as ReporteFormato;

  const contenido = await preguntar("Ingrese el contenido del reporte: ");

  let reporte = factory.descargarReporte(formato, contenido, usuario.estrategia);


  const aplicarEncabezado = await preguntar("Agregar encabezado? (s/n): ");
  if (aplicarEncabezado.toLowerCase() === "s") {
    reporte = new EncabezadoDecorator(reporte);
  }

  const aplicarMarca = await preguntar("Agregar marca de agua? (s/n): ");
  if (aplicarMarca.toLowerCase() === "s") {
    reporte = new MarcaAguaDecorator(reporte);
  }

  const aplicarCifrado = await preguntar("Agregar cifrado? (s/n): ");
  if (aplicarCifrado.toLowerCase() === "s") {
    reporte = new CifradoDecorator(reporte);
  }

  const aplicarCompresion = await preguntar("Agregar compresion? (s/n): ");
  if (aplicarCompresion.toLowerCase() === "s") {
    reporte = new CompresionDecorator(reporte);
  }

  console.log("************ INICIO DEL REPORTE **************")
  console.log(reporte.obtenerContenido(), "\n");
  console.log("************ FIN DEL REPORTE **************")

  rl.close();
}

main();
