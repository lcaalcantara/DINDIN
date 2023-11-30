import './style.css';

function Chip({ id, title, check, categories, setCategories }) {

    function handleCheckCategory() {
        const localCategories = [...categories];

        localCategories.forEach((cat) => {
            if (cat.id === id) {
                cat.check = !cat.check
            }
        });

        setCategories([...localCategories])
    }

    return (
        <div
            className={`${check ? 'check' : 'uncheck'} container-chip`}
            onClick={handleCheckCategory}
        >
            <span>{title}</span>
            {check ? 'X' : '+'}
        </div>
    )
};

export default Chip;