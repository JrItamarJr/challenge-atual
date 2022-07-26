const formatCurrency = (current: number): string => {
    const format = current / 100;
    return format.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

};

export default formatCurrency;