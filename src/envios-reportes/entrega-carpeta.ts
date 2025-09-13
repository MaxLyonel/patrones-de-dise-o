import type { IReport } from "../tipos-reportes/reporte.interface.ts";
import type { IEntrega } from "./entrega.interface.ts";

export class EntregaCarpeta implements IEntrega {
  enviar(reporte: IReport): void {
    console.log("========================================")
    console.log("Guardando reporte en carpeta compartida...");
  }
}