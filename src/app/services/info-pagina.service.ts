import { InfoPagina } from './../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];
  // Servicio HTTP paa realzar peticiones a servidores REST entre otros
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

    private cargarInfo() {
        // leer archivo JSON
        this.http.get('assets/data-pagina.json')
        // tslint:disable-next-line:no-shadowed-variable
        .subscribe( (resp: InfoPagina)  => {

          this.cargada = true;
          this.info =  resp;
        // tslint:disable-next-line:no-string-literal
          console.log(resp);

            });
          }

  private cargarEquipo()  {
      // leer archivo JSON
      this.http.get('https://databasewebpagerachel.firebaseio.com/equipo.json')
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe( (resp: any[])  => {

        this.equipo = resp;
        console.log(resp);
          });
  }
}

