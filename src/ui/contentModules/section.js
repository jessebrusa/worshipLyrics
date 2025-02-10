class Section {
    constructor(sectionName) {
        this.sectionName = sectionName;
        this.contentSection = document.querySelector('#content');
    }

    render() {
        const section = document.createElement('section');
        section.classList.add('section');
        this.contentSection.appendChild(section);

        const sectionName = document.createElement('h2');
        sectionName.innerHTML = this.sectionName;
        section.appendChild(sectionName);

        const sectionContent = document.createElement('div');
        sectionContent.classList.add('section-content');
        section.appendChild(sectionContent);

        this.bgImage();
        this.lyrics();
        this.slide();
    }

    bgImage() {
        console.log('Setting background image');
    }

    lyrics() {
        console.log('Displaying lyrics');
    }

    slide() {
        console.log('Sliding section');
    }
}

export default Section;