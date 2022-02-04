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

export class TicTacToeGame {
  private nextPlayer = Player.X;
  private playerXSquares = new Set<Square>()
  private playerYSquares = new Set<Square>()

  private static readonly TopHorizontalLine = [Square.TopLeft, Square.TopMiddle, Square.TopRight];
  private static readonly MiddleHorizontalLine = [Square.MiddleLeft, Square.MiddleMiddle, Square.MiddleRight]
  private static readonly BottomHorizontalLine = [Square.BottomLeft, Square.BottomMiddle, Square.BottomRight]

  private static hasLine(playedSquares: Set<Square>, squares: Square[]) {
    return squares.every(square => playedSquares.has(square))
  }

  private static hasWonTopRow(squares: Set<Square>): boolean {
    return this.hasLine(squares, this.TopHorizontalLine)
  }

  private static hasWonMiddleRow(squares: Set<Square>): boolean {
    return this.hasLine(squares, this.MiddleHorizontalLine)
  }

  private static hasWonBottomRow(squares: Set<Square>): boolean {
    return this.hasLine(squares, this.BottomHorizontalLine)
  }

  private static hasWon(squares: Set<Square>): boolean {
    return TicTacToeGame.hasWonTopRow(squares) || TicTacToeGame.hasWonMiddleRow(squares) || TicTacToeGame.hasWonBottomRow(squares)
  }

  getStatus() {
    if (TicTacToeGame.hasWon(this.playerXSquares)) {
      return Status.xHasWon
    }

    if (TicTacToeGame.hasWon(this.playerYSquares)) {
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
