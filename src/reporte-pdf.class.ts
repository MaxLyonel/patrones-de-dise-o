import { ReporteFactory } from "./reporte.factory.ts";
import type { IReport, ReporteContenido, ReporteFormato } from "./reporte.interface.ts";


export class ReportePdf implements IReport {
  private contenido: string

  constructor(contenido: string) {
    this.contenido = contenido
    console.log("Reporte Pdf")
  }

  obtenerContenido(): ReporteContenido {
    return this.contenido
  }
}