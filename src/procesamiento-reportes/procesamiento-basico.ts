import type { IReport } from "../tipos-reportes/reporte.interface.ts";
import type { IProcesamiento } from "./procesamiento.interface.ts";

export class BasicoProcesamiento implements IProcesamiento {
  procesar(reporte: IReport): IReport {
    console.log("========================================")
    console.log("Aplicando procesamiento básico...");
    return reporte;
  }
}