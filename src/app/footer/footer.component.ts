import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl :'./footer.component.html',
    styles :[`
    footer {
    background-color: #f8f9fa;
    color: #333;
    padding: 20px 0;
    margin-top: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
  }
    `]
})
export class FooterComponent{

}