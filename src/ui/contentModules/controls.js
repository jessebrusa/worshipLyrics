import Modal from './controlModules/modal.js';
import Section from './section.js';

class Controls {
    constructor(data) {
        this.data = data;
        this.app = document.querySelector('#app');
        this.modal = new Modal(this.data);
    }

    render() {
        const controls = document.createElement('div');
        controls.id = 'controls';
        this.app.appendChild(controls);
        this.createSectionButton();

        return controls;
    }

    createSectionButton() {
        const sectionButton = document.createElement('button');
        sectionButton.innerHTML = 'Create Section';
        sectionButton.id = 'create-section';
        sectionButton.addEventListener('click', () => this.showModal());
        document.querySelector('#controls').appendChild(sectionButton);
    }

    showModal() {
        this.modal.show();
        this.modal.onSubmit(() => this.submitSection());
        this.modal.onCancel(() => this.modal.hide());
    }

    submitSection() {
        const sectionName = this.modal.getInputValue();
        if (this.data.sectionExists(sectionName)) {
            alert(`Section "${sectionName}" already exists. Please try another name.`);
        } else {
            this.data.createSection(sectionName);
            console.log(this.data.getData());
            this.modal.hide();
            new Section(sectionName).render();
        }
    }
}

export default Controls;