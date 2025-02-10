import Controls from './contentModules/controls.js';

class Content {
    constructor(data) {
        this.data = data;
        this.app = document.querySelector('#app');
        this.controls = new Controls(this.data);
    }
    
    render() {
        const content = document.createElement('main');
        content.id = 'content';
        this.app.appendChild(content);

        content.appendChild(this.controls.render());
    }
}

export default Content;