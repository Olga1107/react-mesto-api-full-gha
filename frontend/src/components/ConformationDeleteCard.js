import PopupWithForm from "./PopupWithForm"

function ConfirmationDeleteCard(props) {

    function handleDeleteCard(e) {
        e.preventDefault();
        props.onCardDelete(props.card);
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="confirmation"
            title="Вы уверены?"
            buttonTitle="Да"
            label="Закрыть окно без удаления"
            onSubmit={handleDeleteCard}
        />
    )
}

export default ConfirmationDeleteCard