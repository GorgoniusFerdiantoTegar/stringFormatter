const cleanText = (string) => {
    if (string == '' || string == null){
        return ''
    }
    return string.trim()
}

const capitalize = (string) => {
        if(undefined || string == ''){
            return '';
        }
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const formatDisplayName = (firstName, lastName) => {
    const firstname = capitalize(cleanText(firstName));
    const lastname = capitalize(cleanText(lastName));

    if (firstname == ''){
        return `${lastname}`;
    } else if (lastname == '') {
        return `${firstname}`;
    } else {
        return `${firstname} ${lastname}`;
    }
}

console.log(formatDisplayName('        ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('    miNA   ', 'pATEL'));