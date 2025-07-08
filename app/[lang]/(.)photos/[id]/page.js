const { default: Modal } = require("@/components/Modal");
const { default: PhotoDetails } = require("@/components/PhotoDetails");

export default function page({ params: { id, lang } }) {
    return (
        <Modal>
            <PhotoDetails id={id} lang={lang} />
        </Modal>
    );
}