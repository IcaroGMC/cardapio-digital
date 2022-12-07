// import { is } from 'core-js/core/object';
import Vue from 'vue';

Vue.filter('str_limit', function (value, size) {
    if (!value) return '';
    value = value.toString();

    if (value.length <= size) {
        return value;
    }
    return value.substr(0, size) + '...';
});

Vue.filter('toCurrency', function (value) {
    if (isNaN(parseFloat(value))) {
        return value;
    }
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    return formatter.format(value);
});

Vue.filter('capitalize', function (value) {
    if (!value) return '';

    return value.charAt(0).toUpperCase() + value.slice(1);
})
