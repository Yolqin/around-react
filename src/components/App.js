import logo from '../logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    return (
        <div class="page">
            <div className="page__content">
                <Header/>
                <Main/>
                <Footer/>
            </div>

            <div className="page__dialog_type_edit-profile dialog">
                <div className="dialog__container">
                    <button className="dialog__close-button" type="button" name="close button"/>

                    <form action="#" className="dialog__form dialog__form_type_update-profile" method="post"
                          name="profile-edit">
                        <h3 className="dialog__header">
                            Edit profile
                        </h3>
                        <fieldset className="dialog__fieldset">
                            <input type="text" name="name" id="profile__name"
                                   className="dialog__input dialog__input_type_name"
                                   value="Jacques Cousteau" placeholder="Name" required minLength="2" maxLength="40"/>
                            <span id="profile__name_error" className="dialog__error"/>

                            <input type="text" name="job" id="profile__text"
                                   className="dialog__input dialog__input_type_about-me"
                                   value="Explorer" placeholder="Description" required minLength="2"
                                   maxLength="200"/>
                            <span id="profile__text_error" className="dialog__error"/>
                        </fieldset>
                        <button type="submit" className="dialog__button">Save</button>
                    </form>
                </div>
            </div>


            <div className="page__dialog_type_edit-avatar dialog">
                <div className="dialog__container">
                    <button className="dialog__close-button" type="button" name="close button"/>

                    <form action="#" className="dialog__form" method="post" name="profile-edit">
                        <h3 className="dialog__header">
                            Change profile picture
                        </h3>
                        <fieldset className="dialog__fieldset">
                            <input type="url" name="link" id="card__url"
                                   className="dialog__input dialog__input_type_url-avatar"
                                   placeholder="Avatar link" required/>
                            <span id="card__url-avatar_error" className="dialog__error"/>
                        </fieldset>
                        <button type="submit" className="dialog__button">Save</button>
                    </form>
                </div>
            </div>


            <div className="page__dialog_type_add-grid-item dialog">
                <div className="dialog__container">
                    <button className="dialog__close-button" type="button"/>

                    <form action="#" className="dialog__form dialog__form_type_add-image" method="post"
                          name="profile-edit">
                        <h3 className="dialog__header">
                            New place
                        </h3>
                        <fieldset className="dialog__fieldset">
                            <input type="text" name="name" id="card__title"
                                   className="dialog__input dialog__input_type_grid-title"
                                   placeholder="Title" required minLength="2" maxLength="30"/>
                            <span id="card__title_error" className="dialog__error"/>

                            <input type="url" name="link" id="card__url"
                                   className="dialog__input dialog__input_type_url"
                                   placeholder="Image link" required/>
                            <span id="card__url_error" className="dialog__error"/>
                        </fieldset>

                        <button type="submit" className="dialog__button">Save</button>
                    </form>
                </div>
            </div>


            <div className="page__dialog_type_delete-confirmation dialog">
                <div className="dialog__container">
                    <button className="dialog__close-button" type="button"/>

                    <form action="#" className="dialog__form" method="post" name="delete-confirmation">
                        <h3 className="dialog__header">
                            Are you sure?
                        </h3>
                        <button type="submit" className="dialog__button">Yes</button>
                    </form>
                </div>
            </div>

            <div className="page__dialog_type_image dialog">
                <div className="dialog__container">
                    <button className="dialog__close-button" type="button"/>
                    <figure className="dialog__figure">
                        <img alt="" className="dialog__image"/>
                        <figcaption className="dialog__image-caption"/>
                    </figure>
                </div>
            </div>

            <template className="grid-template">
                <li className="elements__grid-item">
                    <button className="elements__delete-button" type="button"/>
                    <img alt="" className="elements__grid-image"/>
                    <div className="elements__grid-description">
                        <h2 className="elements__grid-header"/>
                        <div className="elements__like-right">
                            <button className="elements__like-button" type="button"/>
                            <p className="elements__like-count"/>
                        </div>
                    </div>
                </li>
            </template>
        </div>
    );
}

export default App;
