import { makeAutoObservable } from 'mobx';
export const DEFAULT_MODAL_CONFIG = {
    cross: true,
    closeOnclickOutside: true,
    alignTop: false,
};
export class BaseModalPresenter {
    constructor(contentConfig = {}) {
        this._contentConfig = {};
        this._isShown = false;
        this._payload = null;
        this._content = null;
        this.openModal = (content, payload) => {
            this._isShown = true;
            this._content = content;
            this._payload = payload;
        };
        this.closeModal = () => {
            this._isShown = false;
            this._content = null;
            this._payload = null;
        };
        makeAutoObservable(this);
        this._contentConfig = contentConfig;
    }
    get isShown() {
        return this._isShown;
    }
    get payload() {
        return this._payload;
    }
    get content() {
        return this._content;
    }
    get config() {
        var _a;
        if (this._content && this._contentConfig[this._content]) {
            return (_a = this._contentConfig[this._content]) !== null && _a !== void 0 ? _a : DEFAULT_MODAL_CONFIG;
        }
        return DEFAULT_MODAL_CONFIG;
    }
}
