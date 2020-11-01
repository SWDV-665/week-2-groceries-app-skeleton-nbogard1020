import { component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-about',
    templateURL: 'about.html'
})

export class AboutPage {
    constructor(public navCtrl: NavController){
        
    }

}