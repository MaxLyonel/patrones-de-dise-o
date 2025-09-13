import type { IReport, ReporteContenido } from "./reporte.interface.ts";


export class ReporteCsv implements IReport {

  private contenido: string
  constructor(contenido: string) {
    this.contenido = contenido
    console.log("Reporte CSV")
  }

  obtenerContenido(): ReporteContenido {
    return this.contenido
  }
}