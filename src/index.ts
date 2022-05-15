import './app/MyComponent';
import { messageFactory } from './store/messageFactory';
import { IMessageApi, MessageApi, messageApiFactory } from './store/messagesApi';
import './style.scss';

import { MessageContainer } from './app/MessageContainer';
import { API_TYPE } from './config';

const messageApi: IMessageApi = messageApiFactory(API_TYPE)
const tree = new MessageContainer([], '', messageApi, messageFactory)
let result = tree.render()
document.getElementById('root')?.appendChild(result);

//////////// reload
const btn = document.createElement('button')
btn.onclick = function() {
    const newNode = tree.render();
    document.getElementById('root')?.replaceChild(newNode, result);
    result = newNode
};
btn.textContent = 'RELOAD';
document.getElementById('root')?.appendChild(btn);