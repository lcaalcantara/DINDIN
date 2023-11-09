import api from "../services/api";
import { formatToBRL } from "./formatter";
import { getItem } from "./storage";

const token = getItem('token')

export async function loadTransactions() {
    try {
        const response = await api.get('/transaction', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

export async function loadStatement() {
    try {
        const response = await api.get('/transaction/statement', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const { entrada, saida } = response.data

        return {
            inflow: formatToBRL(entrada),
            outflow: formatToBRL(saida),
            balance: formatToBRL(entrada - saida)
        };

    } catch (error) {
        console.log(error.response);
    }
}

export async function loadCategories() {
    try {
        const response = await api.get('/category', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const orderedCategories = response.data.sort((a, b) => {
            return a.descricao.localeCompare(b.descricao);
        })

        return orderedCategories;
    } catch (error) {
        console.log(error);
    }
};