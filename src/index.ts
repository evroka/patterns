import './app/MyComponent';
import './style.scss';

import { TextMessage } from './app/TextMessage';
import { ImageMessage } from './app/ImageMessage';
import { AudioMessage } from './app/AudioMessage';
import { MessageContainer } from './app/MessageContainer';

const textScreen = new TextMessage('', 'Test content', true);

const imageScreen = new ImageMessage('', 'assets/images/webpack.svg');

const audioScreen = new AudioMessage('', 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

const tree = new MessageContainer([textScreen, imageScreen, audioScreen], '')
document.getElementById('root')?.appendChild(tree.render());