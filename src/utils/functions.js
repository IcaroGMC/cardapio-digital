import Vue from 'vue';
let maxLength = 36;

export function transformToListString(args) {
    let arr = [];
    for (let index = 0; index < args[0].length; index++) {
        arr.push({
            product: [`
╿código: ${Vue.filter('tag')(Number(args[0][index].tag), '♯')}\n╿nome: ${String(args[0][index].name)}\n╿preço: ${Vue.filter('toCurrency')(JSON.stringify(args[0][index].price))}\n╿quantidade: ${String(args[0][index].quantity).concat(' produto(s)')}\n╿total: ${Vue.filter('toCurrency')(JSON.stringify(args[1][index]))}\n╿${'-'.repeat(maxLength)}`
            ],
        })
    };
    var title = '🛒*Compras*🛒';
    var subtitle = 'Produtos:';
    var totalPrice = `Preço Total: ${Vue.filter('toCurrency')(args[3])}`;
    var totalQuantity = `Quantidade: ${args[2]} produto(s)`;

    let string = [];
    for (let index = 0; index < arr.length; index++) {
        string.push(`${arr[index].product}`
        );
    };

    var head = `╿${'-'.repeat(maxLength)}\n╿${title}\n╿${'-'.repeat(maxLength)}`

    var main = `${string.join('')}`

    var foot = `╿${totalPrice}\n╿${totalQuantity}\n╿${'-'.repeat(maxLength)}`

    var text = `${head}${main}\n${foot}`

    return encodeURI(text);
}