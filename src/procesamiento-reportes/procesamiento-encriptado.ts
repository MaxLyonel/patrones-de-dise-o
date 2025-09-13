import type { IReport } from "../tipos-reportes/reporte.interface.ts";
import type { IProcesamiento } from "./procesamiento.interface.ts";

export class EncriptadoProcesamiento implements IProcesamiento {
  procesar(reporte: IReport): IReport {
    console.log("========================================")
    console.log("Aplicando procesamiento encriptado...");
    const contenidoOriginal = reporte.obtenerContenido();
    return {
      obtenerContenido: () =>
        contenidoOriginal.split("").reverse().join(""), // simulación de cifrado
    };
  }
}