class Content {
    constructor() {
        this.app = document.querySelector('#app');
    }
    
    render() {
        const content = document.createElement('div');
        content.innerHTML = 'This is the content';
        content.id = 'content';
        this.app.appendChild(content);
    }
}

export default Content;