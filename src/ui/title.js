class Title {
    constructor() {
        this.app = document.getElementById('app');
        this.text = 'Welcome to Worship Lyrics';
    }

    render() {
        const titleElement = document.createElement('h1');
        titleElement.textContent = this.text;
        titleElement.id = 'title';
        this.app.appendChild(titleElement);
    }
}

export default Title;