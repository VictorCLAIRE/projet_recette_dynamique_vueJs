new Vue({
    el: '#appPizza',
    data () {
        return {
            pizzas: [],
            ingredients: [],
            filtreIngredient:[]
        }
    },
    mounted () {
        axios
            .get('http://localhost:3000/pizzas')
            .then(response => (this.pizzas = response.data))
    },
    methods:{
        appelApi: async function(){
            //Parcours de la collestion depuis input type text
            const response = await fetch('http://localhost:3000/pizzas')
            //Reponse au format json
            this.produits = await  response.json();
        }
    }
})
new Vue({
    el: '#appIngredient',
    data () {
        return {
            ingredients: [],
            filtreIngredient:[]
        }
    },
    mounted () {
        axios
            .get('http://localhost:3000/ingredients')
            .then(response => (this.ingredients = response.data))
            .then(this.appelApi)
    },
    methods:{
        appelApi: async function(){
            //Parcours de la collection depuis input type text
            const response = await fetch('http://localhost:3000/ingredients')
            //Reponse au format json
            this.produits = await  response.json();

        },

        ajouter : function (ingredient){
            liste.liste.push(ingredient)
        }
    }

})
let liste = new Vue({
    el: '#appResultat',
    data () {
        return {
            liste: [],
        }
    },
    mounted () {
        axios
            .get('http://localhost:3000/liste')
            .then(response => (this.liste = response.data))
    },
    methods:{
        appelApi: async function(){
            //Parcours de la collestion depuis input type text
            const response = await fetch('http://localhost:3000/liste')
            //Reponse au format json
            this.produits = await  response.json();
        }
    }

})