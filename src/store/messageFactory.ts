import { TextMessage } from '../app/TextMessage';
import { ImageMessage } from '../app/ImageMessage';
import { AudioMessage } from '../app/AudioMessage';
import { Message } from '../app/Message';

export interface IMessage {
    id: string;
    type: string;
    content: string;
    isMine: boolean;
  }

export const messageFactory = (message: IMessage): Message =>  {
    const { type, content, isMine } = message

    switch(type) {
      case 'text': return new TextMessage('', content, isMine);
      case 'image': return new ImageMessage('', content, isMine);
      case 'audio': return new AudioMessage('', content, isMine);
  
      default: return new TextMessage('', content, isMine);
    }
  } 