import React, {useEffect} from "react";
import api from '../utils/api';
import Card from '../components/Card';

function Main({onCardClick, onProfileEdit, onAvatarEdit, onCardAdd, onCardDelete}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        api.getInitialCards()
            .then(setCards)
            .catch(err => console.log(err))
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__left-container">
                    <div className="profile__avatar-container">
                        <img src={userAvatar} alt="Profile Avatar" className="profile__avatar"/>
                        <button type="button" name="update avatar"
                                className="profile__avatar_edit" onClick={onAvatarEdit}/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" name="edit profile"
                                onClick={onProfileEdit}/>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" name="add card" onClick={onCardAdd}/>
            </section>

            <section className="elements">
                <ul className="elements__grid">
                    {cards.map(card => (
                        <Card card={card} key={card._id} onCardClick={onCardClick} onCardDelete={onCardDelete}/>
                    ))}
                </ul>
            </section>


        </main>
    );
}

export default Main;