import Vue from 'vue';

Vue.filter('str_limit', function (value, size) {
    if (!value) return '';
    value = value.toString();

    if (value.length <= size) {
        return value;
    }
    return value.substr(0, size) + '...';
});

Vue.filter('price_number', function (value, localMoney) {
    let moneySign;
    if (!value) return 0;
    value = value.toString();
    try {
        switch (localMoney) {
            case 'BR':
                moneySign = 'R$'
                break;
        
            default:
                break;
        }
    } finally {
        var result = moneySign.concat(value)
    }


    
    return result;
});
