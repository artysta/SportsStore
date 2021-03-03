import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";

@Injectable()
export class OrderRepository {
    orders: Order[] = [];

    constructor(private dataSource: StaticDataSource) {}

    getOdrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order) {
        this.dataSource.saveOrder(order);
    }
}