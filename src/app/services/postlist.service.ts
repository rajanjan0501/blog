import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostlistService {

  constructor() { }
  courses = [
    {
      id: 101,
      name: "Kanika",

     
      image: 'assets/bird1.jpg',
      description:'This is the First Bird',

      
   
    },
    {
      id: 102,
      name: "Mukti",
      
      image: 'assets/bird2.avif',
      description:"This is the second bird"
    },
    {
      id: 103,
      name:"Natasha",
      image: 'assets/bird3.jpg',
      description:'This is the third bird'
    },
   
  ];
}
