export class TicTacToeGame {
  private nextPlayer = Player.X;
  private playerXSquares = new Set<Square>()

  getStatus() {
    if (this.playerXSquares.has(Square.TopLeft) && this.playerXSquares.has(Square.TopMiddle) && this.playerXSquares.has(Square.TopRight)) {
      return Status.xHasWon
    }
    return Status.on
  }

  getNextPlayer() {
    return this.nextPlayer;
  }

  play(square: Square) {

    if (this.playerXSquares.has(square)) {
      throw new Error(`square ${square} has already been played`);
    }
    if(this.nextPlayer === Player.X) {
      this.playerXSquares.add(square)
    }
    this.nextPlayer = this.nextPlayer === Player.X ? Player.Y : Player.X

  }
}

export enum Player {
  X = 'X',
  Y = 'Y',
}

export enum Square {
  TopLeft,
  TopRight,
  BottomLeft,
  TopMiddle,
  BottomMiddle,
}

export enum Status {
  on = "ON",
  xHasWon = "X has won",
}
