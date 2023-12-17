import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  ngOnInit(): void {
   
  }
  bgVar:boolean=false
  hdVar:boolean=false
@HostListener('document:scroll')
 onscroll(){
  if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60 ){
    this.bgVar=true
    this.hdVar=true
  }else{
    this.bgVar=false
    this.hdVar=false
  }
 }
}
