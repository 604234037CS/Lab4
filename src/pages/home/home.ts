import { BookListPage } from './../book-list/book-list';
import { Book } from './../../models/book.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    
  constructor(public navCtrl: NavController) {

  }
   
  showBookList(categortName:string)
  {
    console.log(categortName); 
    this.navCtrl.push( BookListPage,
      {category:categortName}
      ); 
  }


}
