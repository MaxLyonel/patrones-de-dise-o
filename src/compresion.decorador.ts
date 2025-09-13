import { ReportDecorator } from "./reporte-decorador.abstract.ts";

export class CompresionDecorator extends ReportDecorator {
  obtenerContenido(): string {
    const contenido = this.reporte.obtenerContenido();
    return contenido.replace(/\s+/g, "");
  }
}