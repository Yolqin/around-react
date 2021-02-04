import React from "react";

function PopupWithForm({name, type, title, isOpen, onClose, submitText, children}) {
    return (
        <div className={`page__dialog_type_${name} dialog ${isOpen && 'dialog_open'}`}>
            <div className="dialog__container">
                <button className="dialog__close-button" type="button" name="close button" onClick={onClose}/>
                <form action="#" className={`dialog__form dialog__form_type_${type}`} method="post"
                      name="profile-edit">
                    <h3 className="dialog__header">
                        {title}
                    </h3>
                    {children}
                    <button type="submit" className="dialog__button">{submitText}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;