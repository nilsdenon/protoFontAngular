import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    //define the toogle property
    private toggle: boolean = false;

    //define your method
    clickEvent(event) {
        //if you just want to toggle the class; change toggle variable.
        this.toggle != this.toggle;
    }
    constructor() {}

    ngOnInit() {}
}
