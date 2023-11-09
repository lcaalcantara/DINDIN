import { useEffect, useState } from 'react';
import FilterIcon from '../../assets/filter-icon.svg';
import { loadCategories, loadTransactions } from '../../utils/requests';
import Chip from '../Chip';
import './style.css';

function Filter({ transactions, updateTransactions }) {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    async function handleClearFilters() {
        const localCategories = [...categories];

        localCategories.forEach(cat => cat.check = false);

        setCategories([...localCategories]);

        const allTransactions = await loadTransactions();

        updateTransactions([...allTransactions]);
    };

    async function handleApplyFilters() {
        const localTransactions = await loadTransactions();
        updateTransactions([...localTransactions]);

        const checkedCategoriesId = [];

        categories.forEach((cat) => {
            if (cat.check) {
                checkedCategoriesId.push(cat.id);
            };
        });

        if (!checkedCategoriesId.length) {
            return;
        }

        const filteredTransactions = localTransactions.filter(
            (transact) => checkedCategoriesId.includes(transact.categoria_id)
        );

        updateTransactions([...filteredTransactions]);
    }

    useEffect(() => {
        async function getCategories() {
            const allCategories = await loadCategories();

            allCategories.forEach(cat => {
                cat.check = false
            })

            setCategories([...allCategories])
        };

        if (open) {
            getCategories();
        }
    }, [open]);

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
                        {categories.map((cat) => (
                            <Chip
                                key={cat.id}
                                check={cat.check}
                                title={cat.descricao}
                                id={cat.id}
                                categories={categories}
                                setCategories={setCategories}
                            />
                        ))}
                    </div>

                    <div className='container-btn-filter'>
                        <button
                            className='btn-white btn-xs'
                            onClick={handleClearFilters}
                        >
                            Limpar Filtros
                        </button>

                        <button
                            className='btn-purple btn-xs'
                            onClick={handleApplyFilters}
                        >
                            Aplicar Filtros
                        </button>
                    </div>
                </div>
            }

        </div>
    )
};

export default Filter;