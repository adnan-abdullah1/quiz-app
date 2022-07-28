import { Component ,HostListener} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
@HostListener("window:beforeunload",["$event"]) unloadHandler(event:Event){
  event.returnValue=false;
  
}
  title = 'frontend';
}
