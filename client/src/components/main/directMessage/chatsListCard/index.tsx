import React from 'react';
import './index.css';
import { Chat } from '../../../../types';

/**
 * ChatsListCard component displays information about a chat and allows the user to select it.
 *
 * @param chat: The chat object containing details like participants and chat ID.
 * @param handleChatSelect: A function to handle the selection of a chat, receiving the chat's ID as an argument.
 */
const ChatsListCard = ({
  chat,
  handleChatSelect,
}: {
  chat: Chat;
  handleChatSelect: (chatID: string | undefined) => void;
}) => (
  <div onClick={() => handleChatSelect(chat._id)} className='chats-list-card'>
    <p>
      <strong>Chat with:</strong> {chat.participants.join(', ')}
    </p>
  </div>
);

export default ChatsListCard;
