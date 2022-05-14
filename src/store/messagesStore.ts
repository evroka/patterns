export class MessageStore {
    private syncWait(ms: number): void {
        const end = Date.now() + ms
        while (Date.now() < end) continue
    }
   
    public getMessages() {
        this.syncWait(5000)

        return [
            {"id": "1", "type": "text", "content": "test text", "isMine": true },
            {"id": "2", "type": "image", "content": "https://via.placeholder.com/100x80/ff006f/ffffff", "isMine": false },
            {"id": "3", "type": "audio", "content": "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3", "isMine": false },
        ]
    }
}