import { CreadorReporte } from "./creador-reporte.abstract.ts";
import { ReporteCsv } from "./report-csv.class.ts";
import type { IReport } from "./reporte.interface.ts";



export class CreadorReporteCsv extends CreadorReporte {
  override create(contenido: string): IReport {
    console.log("Creando reporte en formato Csv")
    return new ReporteCsv(contenido)
  }
}