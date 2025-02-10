import Modal from './controlModules/modal.js';

class Controls {
    constructor(data) {
        this.data = data;
        this.app = document.querySelector('#app');
        this.modal = new Modal();
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
        console.log(`Section created: ${sectionName}`);
        this.modal.hide();
    }
}

export default Controls;