import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-cargando',
  templateUrl: './logo-cargando.page.html',
  styleUrls: ['./logo-cargando.page.scss'],
})
export class LogoCargandoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=> {
      this.router.navigate(['login']);
    }, 2500);

  }

}
