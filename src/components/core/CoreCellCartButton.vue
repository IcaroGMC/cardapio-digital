<template>
    <div>
        <CoreButton
            v-on:click.native="updateCanvas()"
            :style="'width: 120px; height: 35px;'"
            button-icon="fa-solid fa-cart-shopping"  
            button-name="Comprar">
        </CoreButton>
        <canvas hidden id="canvas"></canvas>
        <div hidden id="table" style="font-family: Courier, monospace;display:flex;justify-content:center;background-color:white;height:calc(100vh - 20px);border:1px solid gray;">
            <table style="border-collapse: separate;border-spacing: 0 8px;width:100%;">
                <thead style="background-color:rgb(247, 91, 93);color:white;padding:5px 8px;">
                    <tr>
                        <th style="text-align: left;">Código</th>
                        <th style="text-align: left;">Nome do Produto</th>
                        <th style="text-align: left;">Nome de Pesquisa</th>
                        <th style="text-align: left;">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-on:change="updateCanvas()" style="border-bottom:1px solid gray;" v-for="items in listCART()" v-bind:key="items.id">
                        <td>{{ items.tag | tag('*') || '-' }}</td>
                        <td>{{ items.name }}</td>
                        <td>{{ items.search_name || '-' }}</td>
                        <td>{{ items.price | toCurrency() || '-' }}</td>
                    </tr>
                </tbody>
                <tfoot style="width:100%;background-color:rgb(247, 91, 93);color:white;">
                    <tr>
                        <th colspan="2">Total a Pagar: {{ TOTAL_PRICE | toCurrency() }}</th>
                        <th colspan="2">Número de Pedidos: {{ CART_SIZE }}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
import CoreButton from '@/components/core/CoreButton.vue';
import { mapActions, mapGetters } from 'vuex';
    export default {
        data() {
            return {

            }
        },

        components: {
            CoreButton
        },

        computed: {
            ...mapGetters([
                'PRODUCTS',
                'SUBCATEGORIES',
                'CART',
                'CART_SIZE',
                'TOTAL_PRICE'
            ]),
        },

        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API', 
                'GET_SUBCATEGORIES_FROM_API', 
                'ADD_TO_CART',
                'DELETE_FROM_CART',
                'DELETE_ALL_FROM_CART'
            ]),

            updateCanvas() {

                try {
                    var canvas = document.getElementById('canvas'),
                    ctx = canvas.getContext('2d');
                    canvas.height = 100 + 40 * this.CART.length;
                    canvas.width = 850;

                    var html = document.getElementById('table').outerHTML;

                    render_html_to_canvas(html, ctx, 0, 0, canvas.width, canvas.height);

                    function render_html_to_canvas(html, ctx, x, y, width, height) {
                        var data = "data:image/svg+xml;charset=utf-8," + 
                            '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
                            '<foreignObject width="100%" height="100%">' +
                            html_to_xml(html) +
                            '</foreignObject>' +
                            '</svg>';

                        var img = new Image();
                        img.onload = function() {
                            ctx.drawImage(img, x, y);
                        }
                        img.src = data;
                    }

                    function html_to_xml(html) {
                        var doc = document.implementation.createHTMLDocument('');
                        doc.write(html);
                        doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI);

                        html = (new XMLSerializer).serializeToString(doc.body);
                        return html;
                    }
                } finally {
                    setTimeout(() => {
                        this.downloadCanvasAsImage();
                        this.sendMessageToWhatsapp();   
                    }, 500);
                    
                }

                //font: https://stackoverflow.com/questions/12652769/rendering-html-elements-to-canvas
            },

            downloadCanvasAsImage(){
                let canvasImage = document.getElementById('canvas').toDataURL('image/png');

                // this can be used to download any image from webpage to local disk
                let xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = function () {
                    let a = document.createElement('a');
                    a.href = window.URL.createObjectURL(xhr.response);
                    a.download = `list${Date.now()}.png`;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                };
                xhr.open('GET', canvasImage); // This is to download the canvas Image
                xhr.send();
            },

            sendMessageToWhatsapp() {
                let canvasImage = document.getElementById('canvas').toDataURL('image/png');
                const base64Canvas = canvasImage.split(';base64,')[1];
                console.log(String(base64Canvas));
                var anchor = document.createElement('a');
                anchor.href = `https://api.whatsapp.com/send?phone=5588999718009&image=${base64Canvas}&text=Olá`;
                anchor.target="_blank";
                anchor.click();
            },

            listCART() {
                return this.CART;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>