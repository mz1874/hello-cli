
<template>
    <div class="container">
        <div class="row">
            <div v-show="info.persons.length >0" class="card" v-for="item in info.persons" :key="item.id">
                <a :href="item.html_url" target="_blank">
                    <img :src="item.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{item.login}}</p>
            </div>

            <div v-show="info.isFirst">
                <h1>Welcome</h1>
            </div>

            <div v-show="info.isLoading">
                <h1>Loading....</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListComponent',
    components: {},
    data(){
        return{
            info:{
                persons:[],
                isFirst:true,
                errorMsg:'',
                isLoading:false,
            }
        }
    },
    methods:{

    },
    mounted() {
        this.$bus.$on('sendPersonsData', (data) => {
            this.info = {...this.info, ...data}
        });
    }


}
</script>

<style scoped>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>