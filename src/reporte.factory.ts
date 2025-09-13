// reporte.factory.ts
import type { IReport, ReporteFormato } from "./reporte.interface.ts";
import { CreadorReporteCsv } from "./creador-reporte-csv.class.ts";
import { CreadorReporteExcel } from "./creador-reporte-excel.class.ts";
import { CreadorReportePdf } from "./creador-reporte-pdf.class.ts";

export class ReporteFactory {
  descargarReporte(formatoReporte: ReporteFormato, contenido: any) {
    const reporte: IReport = this.create(formatoReporte, contenido);
    console.log(reporte.obtenerContenido());
    console.log("Descargando reporte...");
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
