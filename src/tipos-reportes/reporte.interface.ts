

export type ReporteFormato = "pdf" | "excel" | "csv"
export type ReporteContenido = string

export interface IReport {

  obtenerContenido(): ReporteContenido
}