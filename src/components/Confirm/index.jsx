import './style.css';

function Confirm({ open, handleClose, handleConfirm }) {
    return (
        <>
            {open &&
                <div className='container-confirm'>
                    <div className='arrow-up'></div>

                    <span>Apagar item?</span>
                    <div className='container-buttons'>
                        <button
                            onClick={handleConfirm}
                            className='btn-xs btn-red'>
                            Sim
                        </button>

                        <button
                            onClick={handleClose}
                            className='btn-xs btn-blue'>
                            Não
                        </button>

                    </div>
                </div>
            }
        </>
    )
};

export default Confirm;