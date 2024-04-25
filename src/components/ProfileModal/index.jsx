import { useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import api from '../../services/api';
import { getItem, setItem } from '../../utils/storage';
import './style.css';

const defaultForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function ProfileModal({ open, handleClose }) {

    const token = getItem('token');
    const [form, setForm] = useState({ ...defaultForm });

    function handleChangeForm({ target }) {
        setForm({ ...form, [target.name]: target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            console.log('As senhas não coincidem');
            return;
        }

        try {
            await api.put('/user', {
                nome: form.name,
                email: form.email,
                senha: form.password
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            setForm({ ...defaultForm })
            setItem('userName', form.name)
            handleClose();
        } catch (error) {
            console.log(error.response.data.mensagem);
        }
    }

    useEffect(() => {

        async function loadUserProfile() {
            try {
                const response = await api.get('/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setForm({
                    ...form,
                    name: response.data.nome,
                    email: response.data.email,
                })

            } catch (error) {

            }
        }
        if (open) {
            loadUserProfile();
        }
    }, [open])

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
                        <form onSubmit={handleSubmit}>
                            <div className='container-inputs'>
                                <label htmlFor="name">Nome</label>
                                <input
                                    type="text"
                                    name='name'
                                    value={form.name}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    value={form.email}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="password">Senha</label>
                                <input
                                    type="password"
                                    name='password'
                                    value={form.password}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>

                            <div className='container-inputs'>
                                <label htmlFor="confirmPassword">Confirme sua Senha</label>
                                <input
                                    type="password"
                                    name='confirmPassword'
                                    value={form.confirmPassword}
                                    onChange={handleChangeForm}
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

export default ProfileModal;