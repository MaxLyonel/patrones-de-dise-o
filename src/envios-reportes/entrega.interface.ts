import type { IReport } from "../tipos-reportes/reporte.interface.ts";

export interface IEntrega {
  enviar(reporte: IReport): void;
}
