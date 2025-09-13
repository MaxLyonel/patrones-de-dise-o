import type { IReport } from "../tipos-reportes/reporte.interface.ts";
import type { IEntrega } from "./entrega.interface.ts";

export class EntregaAPI implements IEntrega {
  enviar(reporte: IReport): void {
    console.log("========================================")
    console.log("Enviando reporte a través de API...");
  }
}