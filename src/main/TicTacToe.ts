export class TicTacToeGame {
  private nextPlayer = Player.X;
  private playerXSquares = new Set<Square>()
  private playerYSquares = new Set<Square>()

  private static hasWonTopRow(squares: Set<Square>): boolean {
    return squares.has(Square.TopLeft) && squares.has(Square.TopMiddle) && squares.has(Square.TopRight)
  }

  private static hasWonMiddleRow(squares: Set<Square>): boolean {
    return squares.has(Square.MiddleLeft) && squares.has(Square.MiddleMiddle) && squares.has(Square.MiddleRight)
  }

  getStatus() {
    if (TicTacToeGame.hasWonTopRow(this.playerXSquares) || TicTacToeGame.hasWonMiddleRow(this.playerXSquares)) {
      return Status.xHasWon
    }

    if (TicTacToeGame.hasWonTopRow(this.playerYSquares) || TicTacToeGame.hasWonMiddleRow(this.playerYSquares)) {
      return Status.yHasWon
    }

    return Status.on
  }

  getNextPlayer() {
    return this.nextPlayer;
  }

  play(square: Square) {
    if (this.playerXSquares.has(square) || this.playerYSquares.has(square)) {
      throw new Error(`square ${square} has already been played`);
    }

    if (this.nextPlayer === Player.X) {
      this.playerXSquares.add(square)
    } else {
      this.playerYSquares.add(square)
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
  MiddleLeft,
  BottomRight,
  MiddleMiddle,
  MiddleRight,
}

export enum Status {
  on = "ON",
  xHasWon = "X has won",
  yHasWon = "Y has won",
}
