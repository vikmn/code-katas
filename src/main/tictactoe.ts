export enum State {
  Started
}

enum Player{
  X='X',
  Y='Y',
}

export class TicTacToe {
  private state:State;
  private nextPlayer: Player;

  constructor() {
    this.state = State.Started;
    this.nextPlayer= Player.X
  }

  getStatus() {
    return ({
      state: this.state,
      nextPlayer: this.nextPlayer
    });
  }

  play() {
    if(this.nextPlayer === Player.X) {
      this.nextPlayer = Player.Y
      return;
    }
    this.nextPlayer = Player.X


  }
}



