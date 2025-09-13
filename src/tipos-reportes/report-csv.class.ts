import type { IReport, ReporteContenido } from "./reporte.interface.ts";


export class ReporteCsv implements IReport {

  private contenido: string
  constructor(contenido: string) {
    this.contenido = contenido
  }

  obtenerContenido(): ReporteContenido {
    return this.contenido
  }
}