import { CreadorReporte } from "./creador-reporte.abstract.ts";
import { ReportePdf } from "./reporte-pdf.class.ts";
import type { IReport } from "./reporte.interface.ts";



export class CreadorReportePdf extends CreadorReporte {
  override create(datos: any) :IReport {
    console.log("========================================")
    console.log("Creando reporte en formato Pdf")
    return new ReportePdf(datos)
  }
}
