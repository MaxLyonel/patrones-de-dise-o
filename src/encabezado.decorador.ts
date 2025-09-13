import { ReportDecorator } from "./reporte-decorador.abstract.ts";

export class EncabezadoDecorator extends ReportDecorator {
  obtenerContenido(): string {
    const contenido = this.reporte.obtenerContenido();
    return `=== ENCABEZADO ===\n${contenido}`;
  }
}