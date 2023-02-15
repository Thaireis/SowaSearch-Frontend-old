import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searches:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let response = this.http.get("http://localhost:8080/findAllBooks");
    response.subscribe((data)=>this.searches=data);
  }
}
