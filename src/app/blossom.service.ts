import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlossomService {

  blossomdata:string;
  constructor(private blossomClient:HttpClient)
  {
    this.blossomdata = "http://localhost:3000/allblossom"
  }
  getBlossomData()
  {
    return this.blossomClient.get(this.blossomdata);
  }
}
