import { useState } from 'react';
import useUserContext from './useUserContext';
import { GameInstance, GameMove2, NimMove } from '../types';

/**
 * Custom hook to manage the state and logic for the "Nim" game page,
 * including making a move and handling input changes.
 * @param gameState The current state of the Nim game.
 * @returns An object containing the following:
 * - `user`: The current user from the context.
 * - `move`: The current move entered by the player.
 * - `handleMakeMove`: A function to send the player's move to the server via a socket event.
 * - `handleInputChange`: A function to update the move state based on user input (1 to 3 objects).
 */

const useNimGamePage = (gameState: GameInstance) => {
  const { user, socket } = useUserContext();

  const [move, setMove] = useState<number | string>('');

  const handleMakeMove = async () => {
    const nimMove: GameMove2<NimMove> = {
      playerID: user.username,
      gameID: gameState.gameID,
      move: { numObjects: Number(move) },
    };

    socket.emit('makeMove', {
      gameID: gameState.gameID,
      move: nimMove,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numValue = Number(e.target.value.slice(-1));

    if (value === '' || (numValue >= 1 && numValue <= 3)) {
      setMove(value === '' ? 1 : numValue);
    }
  };

  return {
    user,
    move,
    handleMakeMove,
    handleInputChange,
  };
};

export default useNimGamePage;
