import Title from './ui/title.js';
import Content from './ui/content.js';
import Footer from './ui/footer.js';

class Main {
    constructor() {
        this.title = new Title(); 
        this.content = new Content();
        this.footer = new Footer();
    }

    run() {
        this.title.render();
        this.content.render();
        this.footer.render();
    }
}

const app = new Main();
app.run();