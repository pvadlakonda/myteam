import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games = [
    {
      title: "Game 1", location: "Ground 1, Plano",
      yesPlayers: ["Praveen", "Naresh"],
      noPlayers: ["Ram", "Bhanu"],
      tentativePlayers: ["Sunny", "Ravi"]
    },
    {
      title: "Game 2", location: "Ground 2, Plano",
      yesPlayers: ["Praveen", "Naresh"],
      noPlayers: ["Ram", "Bhanu"],
      tentativePlayers: ["Sunny", "Ravi"]
    },
    {
      title: "Game 3", location: "Ground 3, Plano",
      yesPlayers: ["Praveen", "Naresh"],
      noPlayers: ["Ram", "Bhanu"],
      tentativePlayers: ["Sunny", "Ravi"]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
