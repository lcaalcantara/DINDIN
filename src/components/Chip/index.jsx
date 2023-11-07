import './style.css';

function Chip({ title, check }) {
    return (
        <div className={`${check ? 'check' : 'uncheck'} container-chip`}>
            <span>{title}</span>
            {check ? 'X' : '+'}
        </div>
    )
};

export default Chip;