<template>
    <div>
        <SearchComponent></SearchComponent>
        <ListComponent></ListComponent>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import ListComponent from "@/components/ListComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";

export default {
    name: 'App',
    components: {
        ListComponent,
        SearchComponent
    },
    data() {
        return {

        };
    },
    methods:{

    },

    mounted() {

    }
}

</script>

<style>

</style>
