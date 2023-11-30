import { useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import api from '../../services/api';
import { loadCategories, loadTransactions } from '../../utils/requests';
import { getItem } from '../../utils/storage';
import './style.css';

const defaultForm = {
    value: '',
    category: {
        id: '',
        name: '',
    },
    date: '',
    description: ''
};

function AddTransactionModal({ open, handleClose, setTransactions }) {

    const [categories, setCategories] = useState([]);
    const [option, setOption] = useState('outflow');
    const [form, setForm] = useState({ ...defaultForm });
    const token = getItem('token');

    function handleFormChange({ target }) {
        setForm({
            ...form,
            [target.name]: target.value,

        });
    };

    function handleSelectChange({ target }) {
        const currentCategory = categories.find((cat) => cat.descricao === target.value);

        if (!currentCategory) {
            return;
        };

        setForm({ ...form, category: { id: currentCategory.id, name: currentCategory.descricao } });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const [day, month, year] = form.date.split('/');

        try {
            await api.post('/transaction',
                {
                    tipo: option === 'inflow' ? 'entrada' : 'saida',
                    descricao: form.description,
                    valor: form.value,
                    data: new Date(`${year}-${month}-${day}`),
                    categoria_id: form.category.id
                },
                {
                    headers: {
                        Authorization: `Bearer: ${token}`
                    }
                }
            );

        } catch (error) {
            console.log(error.response);
        };

        setForm(defaultForm);
        handleClose(false);

        const allTransactions = await loadTransactions();

        setTransactions([...allTransactions])
    };

    useEffect(() => {
        async function getCategories() {
            const allCategories = await loadCategories()

            setCategories([...allCategories])
        }

        getCategories();
    }, []);

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

                        <form onSubmit={handleSubmit}>
                            <div className='container-inputs'>
                                <label htmlFor="name">Valor</label>
                                <input
                                    name='value'
                                    type='number'
                                    value={form.value}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>

                            <div className='container-inputs'>

                                <label htmlFor="category">Categoria</label>
                                <select
                                    name='category'
                                    value={form.category.name}
                                    onChange={handleSelectChange}
                                    required
                                >
                                    <option>Selecione uma categoria</option>
                                    {categories.map((cat) => {
                                        return (
                                            <option
                                                key={cat.id}
                                                value={cat.descricao}
                                            >{cat.descricao}</option>
                                        )
                                    })}
                                </select>

                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="date">Data</label>
                                <input
                                    type='text'
                                    name='date'
                                    value={form.date}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="description">Descrição</label>
                                <input
                                    type='text'
                                    name='description'
                                    value={form.description}
                                    onChange={handleFormChange}
                                    required
                                />
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