import React, {useEffect} from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function App() {

    const [selectedCard, setSelectedCard] = React.useState(null);
    const [profileDialog, setProfileDialog] = React.useState(false);
    const [avatarDialog, setAvatarDialog] = React.useState(false);
    const [cardDialog, setCardDialog] = React.useState(false);
    const [deleteDialog, setDeleteDialog] = React.useState(false);

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditAvatarClick() {
        setAvatarDialog(true);
    }

    function handleEditProfileClick() {
        setProfileDialog(true);
    }

    function handleAddPlaceClick() {
        setCardDialog(true);
    }

    function handleCardDelete() {
        setDeleteDialog(true);
    }

    function closeAllPopups(e) {
        setSelectedCard(false);
        setProfileDialog(false);
        setAvatarDialog(false);
        setCardDialog(false);
        setDeleteDialog(false);
    }

    return (
        <div className="page">
            <div className="page__content">
                <Header/>
                <Main
                    onCardClick={handleCardClick}
                    onProfileEdit={handleEditProfileClick}
                    onAvatarEdit={handleEditAvatarClick}
                    onCardAdd={handleAddPlaceClick}
                    onCardDelete={handleCardDelete}
                />
                <Footer/>
            </div>

            <PopupWithForm
                name='edit-profile'
                //type = 'update-profile'
                title='Edit profile'
                isOpen={profileDialog}
                onClose={closeAllPopups}
                submitText='Save'>
                <Input
                    type='text'
                    name='name'
                    inputType='name'
                    placeholder='Name'
                    required
                    minLength='2'
                    maxLength='40'
                    errorId='profile__name_error'
                />
                <Input
                    type='text'
                    name='job'
                    inputType='about-me'
                    placeholder='Description'
                    required
                    minLength='2'
                    maxLength='200'
                    errorId='profile__text_error'
                />
            </PopupWithForm>

            <PopupWithForm
                name='edit-avatar'
                title='Change profile picture'
                isOpen={avatarDialog}
                onClose={closeAllPopups}
                submitText='Save'>
                <Input
                    type='url'
                    name='link'
                    inputType='url-avatar'
                    placeholder='Avatar link'
                    required
                    errorId='card__url-avatar_error'
                />
            </PopupWithForm>

            <PopupWithForm
                name='add-grid-item'
                title='New place'
                isOpen={cardDialog}
                onClose={closeAllPopups}
                submitText='Save'>
                <Input
                    type='text'
                    name='name'
                    inputType='grid-title'
                    placeholder='Title'
                    required
                    minLength='2'
                    maxLength='30'
                    errorId='card__title_error'
                />
                <Input
                    type='url'
                    name='link'
                    inputType='url'
                    placeholder='Image link'
                    required
                    errorId='card__url_error'
                />
            </PopupWithForm>

            <PopupWithForm
                name='delete-confirmation'
                title='Are you sure?'
                isOpen={deleteDialog}
                onClose={closeAllPopups}
                submitText='Yes'
            />

            <ImagePopup
                selectedCard={selectedCard}
                onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;
