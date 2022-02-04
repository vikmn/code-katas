class TicTacToeGame {


  getStatus() {
    return 'ON'
  }

  nextPlayer() {
    return Player.X;
  }
}
enum Player{
  X='X'
}
describe('ticTacToe',  () => {
  it('should initialise the game', () => {
    const game = new TicTacToeGame();
    expect(game.getStatus()).toEqual('ON')

    expect(game.nextPlayer()).toEqual(Player.X)
  });

});
