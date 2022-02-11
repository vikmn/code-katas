interface Player {name:string}
export enum State {
  Started
}

export class TicTacToe {
  private state:State;
  private nextPlayer: Player;

  constructor() {
    this.state = State.Started;
    this.nextPlayer= {name:'X'}
  }

  getStatus() {
    return ({
      state: this.state,
      nextPlayer: this.nextPlayer
    });
  }
}



