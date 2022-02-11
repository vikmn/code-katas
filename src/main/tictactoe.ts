export class TicTacToe {
  private state;

  constructor() {
    this.state = State.Started
  }

  getStatus() {
    return ({
      state: this.state
    });
  }
}

export enum State {
  Started
}

