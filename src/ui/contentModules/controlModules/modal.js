class Modal {
    constructor() {
        this.overlay = document.createElement('div');
        this.overlay.id = 'overlay';

        this.modal = document.createElement('div');
        this.modal.id = 'modal';

        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.id = 'section-input';
        this.input.placeholder = 'Enter section name';

        this.submitButton = document.createElement('button');
        this.submitButton.innerHTML = 'Submit';
        this.submitButton.id = 'submit-button';

        this.cancelButton = document.createElement('button');
        this.cancelButton.innerHTML = 'Cancel';
        this.cancelButton.id = 'cancel-button';

        this.modal.appendChild(this.input);
        this.modal.appendChild(this.submitButton);
        this.modal.appendChild(this.cancelButton);
        this.overlay.appendChild(this.modal);
    }

    show() {
        document.body.appendChild(this.overlay);
    }

    hide() {
        const overlay = document.querySelector('#overlay');
        if (overlay) {
            document.body.removeChild(overlay);
        }
    }

    onSubmit(callback) {
        this.submitButton.addEventListener('click', callback);
    }

    onCancel(callback) {
        this.cancelButton.addEventListener('click', callback);
    }

    getInputValue() {
        return this.input.value;
    }
}

export default Modal;