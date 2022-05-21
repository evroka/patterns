import './app/MyComponent';
import { messageFactory } from './store/messageFactory';
import { IMessageApi, messageApiFactory } from './store/messagesApi';
import './style.scss';

import { MessageContainer } from './app/MessageContainer';
import { API_TYPE } from './config';
import { Container } from './app/Container';
import { MessageInput } from './app/MessageInput';
import { Store } from './app/Store';

const messageApi: IMessageApi = messageApiFactory(API_TYPE)
const messageContainer = new MessageContainer([], '', messageApi, messageFactory)
const messageInput = new MessageInput();
const container = new Container([messageContainer, messageInput])

const store = Store.getInstance();
store.onChange = reRender;

let result = container.render()
document.getElementById('root')?.appendChild(result);

function reRender() {
    const newNode = container.render();
    document.getElementById('root')?.replaceChild(newNode, result);
    result = newNode
};


//////////// reload
const btn = document.createElement('button');
btn.onclick = reRender; 
btn.textContent = 'RELOAD';
document.getElementById('root')?.appendChild(btn);