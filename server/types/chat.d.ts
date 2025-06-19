import { ObjectId } from 'mongodb';
import { Request } from 'express';
import { Message } from './message';

/**
 * Extends the raw Message with an extra `user` field for
 * enriched user details (populated from `msgFrom`).
 */
export interface MessageInChat extends Message {
  user: {
    _id: ObjectId;
    username: string;
  } | null; // If user not found
}

/**
 * Represents a Chat with participants and messages (fully enriched).
 * participants is still an array of user ObjectIds.
 * messages is an array of MessageInChat objects.
 */
export interface Chat {
   participants: string[];
  messages: Message[];
}

/**
 * Payload for creating a new chat,
 * containing `participants` (array of user IDs) and `messages` (raw message objects).
 */
export interface CreateChatPayload {
  // TODO: Task 3 - Define the properties of the CreateChatPayload interface
}

/**
 * Express request for creating a chat.
 */
export interface CreateChatRequest extends Request {
  // TODO: Task 3 - Define the properties of the CreateChatRequest interface
}

/**
 * Payload for adding a new message to a chat,
 * containing `msg`, `msgFrom`, and optionally `msgDateTime`.
 */
export interface AddMessagePayload {
  // TODO: Task 3 - Define the properties of the AddMessagePayload interface
}

/**
 * Custom request type for routes that require a chatId in params.
 */
export interface ChatIdRequest extends Request {
  // TODO: Task 3 - Define the properties of the ChatIdRequest interface
}

/**
 * Express request for adding a message to a chat, with `chatId` in the route params.
 */
export interface AddMessageRequestToChat extends ChatIdRequest {
  // TODO: Task 3 - Define the properties of the AddMessageRequestToChat interface
}

/**
 * Payload for adding a participant to a chat.
 */
export interface AddParticipantPayload {
  // TODO: Task 3 - Define the properties of the AddParticipantPayload interface
}

/**
 * Express request for adding a participant, with `chatId` in the route params.
 */
export interface AddParticipantRequest extends ChatIdRequest {
  // TODO: Task 3 - Define the properties of the AddParticipantRequest interface
}

/**
 * Express request for fetching a chat based on the participants' username.
 * This request type is used for endpoints that look up a chat by the participant's username,
 * and the `username` parameter will be included in the route.
 */
export interface GetChatByParticipantsRequest extends Request {
  // TODO: Task 3 - Define the properties of the ChatIdRequest interface
}

/**
 * A type representing the possible responses for a Chat operation:
 * either a fully shaped Chat object or an error.
 */
export type ChatResponse = Chat | { error: string };

/**
 * Payload for updating a chat with various changes.
 * This interface contains the updated `chat` object and a `type` to specify the type of update.
 */
export interface ChatUpdatePayload {
  chat: Chat;
  type: 'created' | 'newMessage';
}
