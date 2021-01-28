function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__left-container">
                    <div className="profile__avatar-container">
                        <img src="#" alt="Profile Avatar" className="profile__avatar"/>
                        <button type="button" name="update avatar"
                                className="profile__avatar_edit"/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name"/>
                        <button className="profile__edit-button" type="button" name="edit profile"/>
                        <p className="profile__job"/>
                    </div>
                </div>
                <button className="profile__add-button" type="button" name="add card"/>
            </section>

            <section className="elements">
                <ul className="elements__grid">
                </ul>
            </section>
        </main>
    );
}

export default Main;