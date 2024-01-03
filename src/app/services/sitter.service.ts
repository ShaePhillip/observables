import { Injectable } from '@angular/core';
import { PersonModel } from '../models/PersonModel';
import { BehaviorSubject, map } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SitterService {

  constructor(private httpservice: HttpService) {console.log("loaded2");
  }

  Sitters$ = () => {
    return this.httpservice.get("http://localhost:5174/api/Person")
    .pipe(map(dto => {
      return (dto as PersonModel[]).map(d => Object.assign(new PersonModel, d))
    }))
  }

  setSitterAsHired(sitter : PersonModel){

  }
}
