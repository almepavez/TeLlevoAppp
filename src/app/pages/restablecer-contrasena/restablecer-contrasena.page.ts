import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['home']);
  }
  register() {
    this.router.navigate(['restablecer-contrasena']);
  }
}
