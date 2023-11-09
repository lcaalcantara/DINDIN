import './style.css';
import CloseIcon from '../../assets/close-icon.svg'
import { useState } from 'react';

function AddTransactionModal({ open, handleClose }) {

    const [option, setOption] = useState('outflow')

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
                        <h2>Adicionar Registro</h2>

                        <div className='container-options'>
                            <button
                                className={`${option === 'outflow'
                                    ? 'option-off'
                                    : 'option-inflow'}
                                 btn-l`}
                                onClick={() => setOption('inflow')}
                            >
                                Entrada
                            </button>

                            <button
                                className={`${option === 'outflow'
                                    ? 'option-outflow'
                                    : 'option-off'}
                                 btn-l`}
                                onClick={() => setOption('outflow')}
                            >
                                Saída
                            </button>

                        </div>

                        <form>
                            <div className='container-inputs'>
                                <label htmlFor="name">Valor</label>
                                <input type="text" name='name' />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="category">Categoria</label>
                                <select name='category'>
                                    <option>Categoria</option>
                                </select>

                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="date">Data</label>
                                <input type="text" name='date' />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="description">Descrição</label>
                                <input type="text" name='description' />
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

export default AddTransactionModal;