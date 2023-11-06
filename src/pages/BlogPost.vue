<script>
export default {
    components: {},
    data() {
        return {
            data: [],
        };
    },
    created() {
        this.fetchData();
    },
    watch: {
        '$route.params.slug': 'fetchData', // Watch for changes in the slug parameter and trigger fetchData
    },
    methods: {
        async fetchData() {
            try {
                const res = await fetch(`https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/${this.$route.params.slug}/`);

                if (!res.ok) {
                    console.error(`Failed to fetch data. Status: ${res.status}, StatusText: ${res.statusText}`);
                    return;
                }

                const data = await res.json();
                this.data = data;
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
};
</script>


<template>
    <div>
        <h1>{{ this.data.portfolio_title }}</h1>
        <p>{{ this.data.portfolio_text }}</p>
        <p>{{ this.data.portfolio_link }}</p>
        <p>{{ this.data.portfolio_data }}</p>
        <p>{{ this.data.portfolio_slug }}</p>
    </div>
</template>