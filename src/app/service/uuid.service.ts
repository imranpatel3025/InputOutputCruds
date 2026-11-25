import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidService {

  constructor() { }

  getUUID(){
    return crypto.randomUUID()
  }
}
