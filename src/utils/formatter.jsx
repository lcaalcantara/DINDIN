import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

export function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1, word.length)
}

export function formateToDate(date) {
    const generatedDate = new Date(date);

    return format(generatedDate, 'dd/MM/yyyy');
}

export function formateToWeek(date) {
    const generatedDate = new Date(date);

    const weekDay = capitalize(format(generatedDate, 'eee', { locale: ptBR }))

    return weekDay
}

export function formatToBRL(value) {
    return value.toLocaleString('pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        });
}