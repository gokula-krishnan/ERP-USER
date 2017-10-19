import { Component } from '@angular/core';

import { InventoryPage } from '../Inventory/Inventory';
import { DeliveryPage } from '../Delivery/Delivery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DeliveryPage;
  tab2Root = InventoryPage;

  constructor() {

  }
}
