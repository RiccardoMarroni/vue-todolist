const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: '1',
                    done: false
                },
                {
                    text: '2',
                    done: true
                },
                {
                    text: '3',
                    done: false
                },
                {
                    text: '4',
                    done: false
                },
                {
                    text: '5',
                    done: false
                },
            ]
        };
    },
    methods : {

    }
}).mount('#app');