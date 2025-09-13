import { CreadorReporte } from "./creador-reporte.abstract.ts";
import { ReporteExcel } from "./reporte-excel.class.ts";
import type { IReport } from "./reporte.interface.ts";



export class CreadorReporteExcel extends CreadorReporte {

  override create(contenido: string): IReport {
    console.log("Creando reporte en formato Excel")
    return new ReporteExcel(contenido)
  }
}