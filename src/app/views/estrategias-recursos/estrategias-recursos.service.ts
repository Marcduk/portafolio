import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Material } from '../../entidades/material';
import { TipoMaterial } from '../../entidades/tipoMaterial';
import { Finalidad } from '../../entidades/finalidad';
import { EstrategiaMetodologica } from '../../entidades/estrategiaMetodologica';
import { GlobalConstants } from '../../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class EstrategiasRecursosService {

  BASE_URL = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  // Metodos de materiales
  getMateriales(idSilabo: number): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.BASE_URL}/materiales/${idSilabo}/tipos/`);
  }

  createMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.BASE_URL}/materiales/`, material);
  }

  deleteMaterial(id: number): Observable<Material> {
    return this.http.delete<Material>(`${this.BASE_URL}/materiales/${id}`);
  }

  deleteMateriales(materiales: Material[]): Observable<any> {
    return this.http.request('delete', `${this.BASE_URL}/materiales/removeMany`, {body: materiales});
  }

  updateMaterial(material: Material, id: number): Observable<Material> {
    return this.http.put<Material>(`${this.BASE_URL}/materiales/${id}`, material);
  }

  // Metodos de tipos material
  getTiposMaterial(): Observable<TipoMaterial[]> {
    return this.http.get<TipoMaterial[]>(`${this.BASE_URL}/tipo-materiales`);
  }

  // Metodos de finalidad
  // getFinalidades(): Observable<Finalidad[]> {
  //   return this.http.get<Finalidad[]>(`${this.BASE_URL}/finalidades/estrategia/`);
  // }

  // createFinalidad(finalidad: Finalidad): Observable<Finalidad> {
  //   return this.http.post<Finalidad>(`${this.BASE_URL}/finalidades/`, finalidad);
  // }

  // deleteFinalidad(id: number): Observable<Finalidad> {
  //   return this.http.delete<Finalidad>(`${this.BASE_URL}/finalidades/${id}`);
  // }

  // deleteFinalidadesAndEstrategiaMetodologica(finalidades: Finalidad[]): Observable<any> {
  //   return this.http.request('delete', `${this.BASE_URL}/finalidades/removeMany`, {body: finalidades});
  // }

  // updateFinalidad(finalidad: Finalidad, id: number): Observable<Finalidad> {
  //   return this.http.put<Finalidad>(`${this.BASE_URL}/finalidades/${id}`, finalidad);
  // }

  // Metodos de estrategias metodologicas
  getEstrategiasMetodologicas(idSilabo: number): Observable<EstrategiaMetodologica[]> {
    return this.http.get<EstrategiaMetodologica[]>(`${this.BASE_URL}/estrategias-metodologicas/${idSilabo}/silabo`);
  }

  createEstrategiaMetodologica(estrategiaMetodologica: EstrategiaMetodologica): Observable<EstrategiaMetodologica> {
    return this.http.post<EstrategiaMetodologica>(`${this.BASE_URL}/estrategias-metodologicas/`, estrategiaMetodologica);
  }

  deleteEstrategiasMetodologicas(estrategias: EstrategiaMetodologica[]): Observable<any> {
    return this.http.request('delete', `${this.BASE_URL}/estrategias-metodologicas/removeMany`, {body: estrategias});
  }

  updateEstrategiaMetodologica(estrategiaMetodologica: EstrategiaMetodologica, id: number): Observable<EstrategiaMetodologica> {
    return this.http.put<EstrategiaMetodologica>(`${this.BASE_URL}/estrategias-metodologicas/${id}`, estrategiaMetodologica);
  }

}
