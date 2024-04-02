const { createApp } = Vue;

createApp({
    data() {
        return {
            newText: "",
            tasks: [
                {
                    id: 1,
                    text: 'Dare il cencio',
                    done: false
                },
                {
                    id: 2,
                    text: 'Far mangiare i gatti',
                    done: true
                },
                {
                    id: 3,
                    text: 'Pulire il vaso rotto dai gatti',
                    done: false
                },
                {
                    id: 4,
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    id: 5,
                    text: 'Lavare la macchina',
                    done: false
                },
            ]
        };
    },
    methods : {
        removeItem(index) {
            this.tasks.splice(index,1);
        },
        addItem() {
            this.tasks.push({});
            this.tasks[this.tasks.length - 1].text = this.newText;
            this.tasks[this.tasks.length - 1].done = false;
        }
    }
}).mount('#app');