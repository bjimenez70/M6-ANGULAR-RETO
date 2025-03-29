import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
private urlconsultasaldo = 'http://localhost:8080/consultasaldo';
  
  constructor(private httpClient:HttpClient) { }
  obtenersaldo():Observable<any>
}
