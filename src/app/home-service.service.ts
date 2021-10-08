import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
 songs=[
   
    { Album_name:'Up All Night', Song:'Gotta Be You'},
    { Album_name:'Take me Home', Song:'Rock me'},
    { Album_name:'take me Home', Song:'Nobody Compares'},
    { Album_name:'Midnight memories', Song:'Beter than Words'},
    { Album_name:'FOUR', Song:'No Control'},
    { Album_name:'Made in the A.M.', Song:'If I could Fly'}

 ]
  constructor() { }
    public getsongs(): Array<{Album_name: any,Song: any}>{
      return this.songs;
    
    }
    public addsong(songs:{Album_name: any,Song:any}){
      this.songs.push(songs)
    }
    }

