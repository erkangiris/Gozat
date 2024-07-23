export function dateFormat(epochTime) {
    const date = new Date(epochTime * 1000); // Epoch zamanını milisaniyeye çeviriyoruz

    const optionsFullDate = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit'
    };
    
    const optionsOnlyDate = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };

    const optionsDayMonth  = {
        month: 'long', 
        day: 'numeric'
    };

    const optionsShortDate = {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };

    const fullDate = date.toLocaleDateString('tr-TR', optionsFullDate).replace(',', '');
    const onlyDate = date.toLocaleDateString('tr-TR', optionsOnlyDate).replace(',', '');
    const shortDate = date.toLocaleDateString('tr-TR', optionsShortDate);
    const shortDayMonth = date.toLocaleDateString('tr-TR', optionsDayMonth);
    const shortMonth = date.toLocaleString('tr-TR', { month: 'short' });
    const shortDay = date.toLocaleString('tr-TR', { day: 'numeric' });

    return {
        fullDate,
        onlyDate,
        shortDate,
        shortMonth,
        shortDayMonth,
        shortDay
    };
}
