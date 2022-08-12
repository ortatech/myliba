import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class KeyResultService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  public getData (): Observable<any> {
    return this.httpClient.get(`${environment.baseURL}/data.json`)
  }

  saveData (id: any, data: any) {
    return new Promise((resolve) => {
      return resolve(data)
    })
    /*
      return this.httpClient.put(`${environment.baseURL}/save/${id}`, data, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).toPromise()
    */
  }
}
