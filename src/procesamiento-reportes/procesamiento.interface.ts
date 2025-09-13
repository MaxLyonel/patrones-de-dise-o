// procesamiento.interface.ts

import type { IReport } from "../tipos-reportes/reporte.interface.ts";

export interface IProcesamiento {
  procesar(reporte: IReport): IReport;
}
