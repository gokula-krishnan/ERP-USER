import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsRequestPage } from '../ItemsRequest/ItemsRequest';

@Component({
  selector: 'page-Delivery',
  templateUrl: 'Delivery.html'
})
export class DeliveryPage {
  selectedItems: any;
  titles: string[];


  constructor(public navCtrl: NavController) {
    this.titles= [];
    for(let i = 1; i < 6; i++) {
      this.titles.push(
         'REQUEST' + i
    );
    }

  }
toggle()
{
  this.navCtrl.push(ItemsRequestPage,{})
}

}
