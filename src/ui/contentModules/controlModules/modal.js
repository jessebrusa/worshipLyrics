class Modal {
    constructor() {
        this.createOverlay();
        this.createModal();
        this.createInput();
        this.createButtons();
        this.appendElements();
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.id = 'overlay';
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.id = 'modal';
    }

    createInput() {
        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.id = 'section-input';
        this.input.placeholder = 'Enter section name';
    }

    createButtons() {
        this.submitButton = document.createElement('button');
        this.submitButton.innerHTML = 'Submit';
        this.submitButton.id = 'submit-button';

        this.cancelButton = document.createElement('button');
        this.cancelButton.innerHTML = 'Cancel';
        this.cancelButton.id = 'cancel-button';
    }

    appendElements() {
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
        this.submitButton.removeEventListener('click', this._submitCallback);
        this._submitCallback = callback;
        this.submitButton.addEventListener('click', this._submitCallback);
    }

    onCancel(callback) {
        this.cancelButton.removeEventListener('click', this._cancelCallback);
        this._cancelCallback = callback;
        this.cancelButton.addEventListener('click', this._cancelCallback);
    }

    getInputValue() {
        return this.input.value;
    }
}

export default Modal;