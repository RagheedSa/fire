import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  getUserDetails(username, password) {

    //post to http , return user info

    return this.http.post('/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data, "from    jhgfdfyuiop;lknb     server")
    })

  }
}
