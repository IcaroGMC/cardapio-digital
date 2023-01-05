<template>
    <div>
        <CoreButton
            v-on:click.native="updateCanvas()"
            :style="'width: 120px; height: 35px;'"
            button-icon="fa-solid fa-cart-shopping"  
            button-name="Comprar">
        </CoreButton>
        <canvas hidden id="canvas"></canvas>
        <div hidden id="table" 
            style="font-family: Courier, monospace;display:flex;justify-content:center;background-color:white;height:calc(100vh - 20px);border:1px solid gray;">
            <table style="border-collapse: separate;border-spacing: 0 8px;width:100%;">
                <thead style="background-color:rgb(247, 91, 93);color:white;padding:5px 8px;">
                    <tr>
                        <th style="text-align: left;">Código</th>
                        <th style="text-align: left;">Nome do Produto</th>
                        <th style="text-align: left;">Nome de Pesquisa</th>
                        <th style="text-align: left;">Preço</th>
                        <th style="text-align: left;">Quantidade</th>
                        <th style="text-align: left;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-on:change="updateCanvas()" 
                    style="border-bottom:1px solid gray;" 
                    v-for="(items, index) in CART" v-bind:key="items.id">
                        <td>{{ items.tag | tag('*') || '-' }}</td>
                        <td>{{ items.name }}</td>
                        <td>{{ items.search_name || '-' }}</td>
                        <td>{{ items.price | toCurrency() || '-' }}</td>
                        <td>{{ items.quantity }} produto(s)</td>
                        <td>{{ CART_TOTAL[index] | toCurrency() || '-' }}</td>
                    </tr>
                </tbody>
                <tfoot style="width:100%;background-color:rgb(247, 91, 93);color:white;">
                    <tr>
                        <th colspan="2">Total a Pagar: {{ TOTAL_PRICE | toCurrency() }}</th>
                        <th colspan="4">Número de Pedidos: {{ CART_SIZE }}</th>
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
                'GENERIC_GET',
                'CART',
                'CART_TOTAL',
                'CART_SIZE',
                'TOTAL_PRICE'
            ]),
        },

        methods: {
            ...mapActions([
                'GENERAL_REQUISITION_API',
                'ADD_TO_CART',
                'DELETE_FROM_CART',
                'DELETE_ALL_FROM_CART'
            ]),

            generalGetItems(args) {
                return this.GENERIC_GET.filter(obj => obj.name == String(args))
            },

            updateCanvas() {
                try {
                    var canvas = document.getElementById('canvas'),
                    ctx = canvas.getContext('2d');
                    canvas.height = 100 + 40 * this.CART.length;
                    canvas.width = 1050;

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
                // let canvasImage = document.getElementById('canvas').toDataURL('image/png');

                // let xhr = new XMLHttpRequest();
                // xhr.responseType = 'blob';
                // xhr.onload = function () {
                //     let a = document.createElement('a');
                //     a.href = window.URL.createObjectURL(xhr.response);
                //     a.download = `list${Date.now()}.png`;
                //     a.style.display = 'none';
                //     document.body.appendChild(a);
                //     a.click();
                //     a.remove();
                // };
                // xhr.open('GET', canvasImage);
                // xhr.send();
            },

            sendMessageToWhatsapp() {
                let canvasImage = document.getElementById('canvas').toDataURL('image/png');

                this.GENERAL_REQUISITION_API({
                    url: ['list'],
                    methods: 'POST',
                    data: canvasImage
                });

                // const base64Canvas = canvasImage.split(';base64,');
                // var anchor = document.createElement('a');
                // anchor.href = `https://api.whatsapp.com/send?phone=558899718009&text=${canvasImage}`;
                // anchor.target="_blank";
                // anchor.click();
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>