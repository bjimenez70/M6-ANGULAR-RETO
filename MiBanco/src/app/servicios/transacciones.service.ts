import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  //Consulta Saldo/Consulta transacciones
  constructor(private httpClient:HttpClient) { }
  obtenerSaldo(urlconsultasaldo:string):Observable<any>  {
    return this.httpClient.get<any> (urlconsultasaldo)
   }

   //Deposito Sucursal
   postDepositoSucursal(urldepositoSuc: string, monto: number): Observable<any> {
    const params = new HttpParams().set('monto', monto.toString());
    return this.httpClient.post<any>(urldepositoSuc, null, { params });
  }
}
