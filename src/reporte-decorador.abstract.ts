// report-decorator.abstract.ts
import type { IReport } from "./reporte.interface.ts";

export abstract class ReportDecorator implements IReport {
  protected reporte: IReport
  constructor(reporte: IReport) {
    this.reporte = reporte
  }

  abstract obtenerContenido(): string;
}
