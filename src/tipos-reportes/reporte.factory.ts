// reporte.factory.ts
import type { IReport, ReporteFormato } from "./reporte.interface.ts";
import { CreadorReportePdf } from "./creador-reporte-pdf.class.ts";
import type { IEntrega } from "../envios-reportes/entrega.interface.ts";
import { CreadorReporteExcel } from "./creador-reporte-excel.class.ts";
import { CreadorReporteCsv } from "./creador-reporte-csv.class.ts";
import type { IProcesamiento } from "../procesamiento-reportes/procesamiento.interface.ts";

export class ReporteFactory {

  private entrega: IEntrega
  constructor(entrega: IEntrega) {
    this.entrega = entrega
  }

  descargarReporte(
    formatoReporte: ReporteFormato,
    contenido: any,
    procesamiento: IProcesamiento
  ) {
    let reporte: IReport = this.create(formatoReporte, contenido);
    console.log("========================================")
    console.log("Descargando reporte...");
    reporte = procesamiento.procesar(reporte)
    this.entrega.enviar(reporte)
    return reporte
  }

  create(formato: ReporteFormato, contenido: any): IReport {
    switch (formato) {
      case "pdf":
        return new CreadorReportePdf().create(contenido);
      case "excel":
        return new CreadorReporteExcel().create(contenido);
      case "csv":
        return new CreadorReporteCsv().create(contenido);
      default:
        throw new Error(`Formato no soportado: ${formato}`);
    }
  }
}
