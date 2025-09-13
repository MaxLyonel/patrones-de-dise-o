import { ReportDecorator } from "./reporte-decorador.abstract.ts";

export class MarcaAguaDecorator extends ReportDecorator {
  obtenerContenido(): string {
    const contenido = this.reporte.obtenerContenido();
    return `${contenido}\n*** MARCA DE AGUA ***`;
  }
}