const { createApp } = Vue;

createApp({
    data() {
        return {
            newText: "",
            tasks: [
                {
                    text: 'Dare il cencio',
                    done: false
                },
                {
                    text: 'Far mangiare i gatti',
                    done: true
                },
                {
                    text: 'Pulire il vaso rotto dai gatti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
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