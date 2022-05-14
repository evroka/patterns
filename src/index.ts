import './app/MyComponent';
import { messageFactory } from './store/messageFactory';
import { MessageStore } from './store/messagesStore';
import './style.scss';

import { MessageContainer } from './app/MessageContainer';

const rawMessages = new MessageStore().getMessages();
const messages = rawMessages.map(message => messageFactory(message))

const tree = new MessageContainer(messages, '')
document.getElementById('root')?.appendChild(tree.render());