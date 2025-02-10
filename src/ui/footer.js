class Footer {
    constructor() {
        this.app = document.getElementById('app');
        const currentYear = new Date().getFullYear();
        this.text = `© ${currentYear} Worship Lyrics. All rights reserved.`;
    }

    render() {
        const footerElement = document.createElement('footer');
        footerElement.id = 'footer';
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = this.text;
        footerElement.appendChild(paragraphElement);
        this.app.appendChild(footerElement);
    }
}

export default Footer;
