export class TicTacToeGame {
  private nextPlayer = Player.X;
  private playedSquares = new Set<Square>()

  getStatus() {
    if (this.playedSquares.has(Square.TopLeft) && this.playedSquares.has(Square.TopMiddle) && this.playedSquares.has(Square.TopRight)) {
      return Status.xHasWon
    }
    return Status.on
  }

  getNextPlayer() {
    return this.nextPlayer;
  }

  play(square: Square) {
    this.nextPlayer = this.nextPlayer === Player.X ? Player.Y : Player.X

    if (this.playedSquares.has(square)) {
      throw new Error(`square ${square} has already been played`);
    }

    this.playedSquares.add(square)
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
