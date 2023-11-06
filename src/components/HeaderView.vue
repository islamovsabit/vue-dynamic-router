<script>
export default {
    
    components: {
        
    },
    
    created() {
        
        this.fetchData()
        this.viewData()
    },
    
    data() {
        return {
            data: []
        }
    },
    
    methods: {
        
        async fetchData() {
            try {
                const res = await fetch('https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/')
                const data = await res.json()
                this.data = data
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        
        viewData() {
            console.log(this.data);
        }
    }
}
</script>
<template>
    <div>
    header
    <router-link :to="'/blog/' + item.portfolio_slug" v-for="(item, index) in this.data" :key="index">
        {{ item.portfolio_slug }}
    </router-link>
    
    </div>
</template>