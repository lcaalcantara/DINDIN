import './style.css';
import CloseIcon from '../../assets/close-icon.svg'

function ProfileModal({ open, handleClose }) {
    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal'>
                        <img
                            src={CloseIcon}
                            alt="close-button"
                            className='close-button'
                            onClick={() => handleClose(false)}
                        />
                        <h2>Editar Perfil</h2>
                        <form>
                            <div className='container-inputs'>
                                <label htmlFor="name">Nome</label>
                                <input type="text" name='name' />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="password">Senha</label>
                                <input type="password" name='password' />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="confirm-password">Confirme sua Senha</label>
                                <input type="password" name='confirm-password' />
                            </div>

                            <button
                                className='btn-purple btn-s'
                            // onClick={ }
                            >
                                Confirmar
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
};

export default ProfileModal;