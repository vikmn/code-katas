export class TicTacToe {
  private state:State;
  private nextPlayer: string;

  constructor() {
    this.state = State.Started;
    this.nextPlayer= 'X'
  }

  getStatus() {
    return ({
      state: this.state,
      nextPlayer: this.nextPlayer
    });
  }
}

export enum State {
  Started
}

