const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Pulire la casa',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
                {
                    text: 'Buttare la spazzatura',
                    done: false
                },
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Cambiare la lampadina',
                    done: false
                },
            ]
        };
    },
    methods : {

    }
}).mount('#app');