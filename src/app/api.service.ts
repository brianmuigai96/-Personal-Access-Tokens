import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  username!: string;
  token!: string;
  endPart: any = 'WUlWfnbHTiNHee4YjCuu';
  
  constructor(
    private http: HttpClient
  ) { }
}
