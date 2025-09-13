import type { IReport } from "./reporte.interface.ts";

export abstract class CreadorReporte {
  abstract create(datos: any): IReport;
}
