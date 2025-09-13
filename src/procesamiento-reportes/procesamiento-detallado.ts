import type { IReport } from "../tipos-reportes/reporte.interface.ts";
import type { IProcesamiento } from "./procesamiento.interface.ts";

export class DetalladoProcesamiento implements IProcesamiento {
  procesar(reporte: IReport): IReport {
    console.log("========================================")
    console.log("Aplicando procesamiento detallado...");
    const contenidoOriginal = reporte.obtenerContenido();
    return {
      obtenerContenido: () => `[DETALLADO]\n${contenidoOriginal}`,
    };
  }
}