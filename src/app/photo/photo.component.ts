import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  urls : any ;
  constructor(private photoService : PhotoService) { }

  searchPhoto(){
    this.photoService.getPhoto().subscribe(urls=>{console.log(urls)
    this.urls=urls;
    })
  } 

  ngOnInit() : void{
  }

}
