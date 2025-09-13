import type { IProcesamiento } from "./procesamiento.interface.ts";

export type TipoUsuario = "Ejecutivo" | "Auditor" | "Analista";

export class Usuario {
  public nombre: string;
  public tipo: TipoUsuario;
  public estrategia: IProcesamiento;
  constructor(
    nombre: string,
    tipo: TipoUsuario,
    estrategia: IProcesamiento
  ) {
    this.nombre = nombre;
    this.tipo = tipo
    this.estrategia = estrategia
  }
}
