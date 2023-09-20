import React from 'react';

const ConfirmationModal = ({ handleToDelete, closeModal, modalData, title, message }) => {
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=>handleToDelete(modalData)} htmlFor="my_modal_6" className="btn">YES</label>
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-outline">
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;