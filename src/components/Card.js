function Card({card, onCardClick}) {

    function handleCardClick() {
        onCardClick(card);
    }

    return (
        <li className="elements__grid-item">
            <button className="elements__delete-button" type="button"/>
            <img alt={card.name} className="elements__grid-image" src={card.link} onClick={handleCardClick}/>
            <div className="elements__grid-description">
                <h2 className="elements__grid-header">{card.name}</h2>
                <div className="elements__like-right">
                    <button className="elements__like-button" type="button"/>
                    <p className="elements__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;