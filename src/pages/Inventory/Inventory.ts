import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';

@Component({
  selector: 'page-Inventory',
  templateUrl: 'Inventory.html'
})
export class InventoryPage {
  selectedItem: any;
  icons: string[];
  names: string[];
  items: Array<{ title: string, icon: string, open: boolean}>

  constructor(public navCtrl: NavController) {

    this.icons =['boat','cart','football','paper','hammer'];
    this.names = ['PENCIL','TABLE','CHAIR','PAPER','MIKE'];

    this.items= [];
    for(let i = 0; i < 5; i++){
      this.items.push({
        title: this.names[i],
        icon: this.icons[i],
        open: false
      });
    }
  }
  toggleSection(i) {
    this.items[i].open = !this.items[i].open;
  }


}
