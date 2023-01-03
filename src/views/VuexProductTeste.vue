<template>
    <div>
        <router-link to="/">voltar</router-link>
        <canvas v-on:click="downloadCanvasAsImage()" draggable="true" id="canvas" width="450" height="1000"></canvas>
        <div v-on:load="drawImage()" id="tag" style="font-family: Courier, monospace;display:flex;justify-content:center;background-color:white;height:100%;border:1px solid gray;">
            <table style="border-collapse: separate;border-spacing: 0 8px;width:100%">
                <thead style="background-color:rgb(247, 91, 93);color:white;padding:5px 8px;">
                    <tr>
                        <th style="text-align: left;">Nome do Produto</th>
                        <th style="text-align: left;">Preço</th>
                        <th style="text-align: left;">Código</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="items in CART" v-bind:key="items.id">
                        <td>{{ items.name }}</td>
                        <td>{{ items.price | toCurrency() }}</td>
                        <td>{{ items.tag | tag('*') }}</td>
                    </tr>
                </tbody>
                <tfoot style="width:100%;background-color:rgb(247, 91, 93);color:white;">
                    <tr>
                        <th colspan="3">Total a Pagar: {{ TOTAL_PRICE | toCurrency() }}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        data() {
            return {
                exampleName: []
            }
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

            updateCanvas: function () {
                for (let index = 0; index < this.CART.length; index++) {
                    this.exampleName.push(this.CART[index].name);
                };
                var canvas = document.getElementById('canvas'),
                ctx = canvas.getContext('2d');
                const html = `
                    
                `;
                console.log(html);

                render_html_to_canvas(html, ctx, 0, 0, 450, 1000);

                function render_html_to_canvas(html, ctx, x, y, width, height) {
                    var data = "data:image/svg+xml;charset=utf-8," + '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
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
                    a.download = 'image_name.png';
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                };
                xhr.open('GET', canvasImage); // This is to download the canvas Image
                xhr.send();
            },

            drawImage() {
                const canvas = document.createElement("canvas");
                canvas.setAttribute("width", 132);
                canvas.setAttribute("height", 150);

                // Insert before the image
                image.parentNode.insertBefore(canvas, image);

                ctx = canvas.getContext("2d");

                // Draw image to canvas
                ctx.drawImage(image, 15, 20);

                // Add frame
                ctx.drawImage(document.getElementById("frame"), 0, 0);
            }
        },

        mounted() {
            this.updateCanvas();
        }
    }
</script>

<style lang="scss" scoped>

</style>