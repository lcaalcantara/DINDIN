import { useState } from 'react';
import './style.css';
import FilterIcon from '../../assets/filter-icon.svg'
import Chip from '../Chip';

function Filter() {
    const [open, setOpen] = useState(false);

    return (
        <div className='container-filter'>

            <button className='btn-filter btn-white' onClick={() => setOpen(!open)}>
                <img src={FilterIcon} alt="filter" />
                Filtrar
            </button>

            {open &&
                <div className='filter-body'>
                    <strong>Categoria</strong>

                    <div className='container-categories'>
                        <Chip check title='Compras' />
                        <Chip check={false} title='Vendas' />
                    </div>

                    <div className='container-btn-filter'>
                        <button className='btn-white btn-xs'>Limpar Filtros</button>
                        <button className='btn-purple btn-xs'>Aplicar Filtros</button>
                    </div>
                </div>
            }

        </div>
    )
};

export default Filter;