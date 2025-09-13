import { ReportDecorator } from "./reporte-decorador.abstract.ts";

export class CifradoDecorator extends ReportDecorator {
  obtenerContenido(): string {
    const contenido = this.reporte.obtenerContenido();
    return contenido.split("").reverse().join("");
  }
}