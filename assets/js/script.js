const app = {
    data() {
        return {
            name: null,
            list: JSON.parse(localStorage.todo_list || '[]')
        }
    },

    methods: {
        setToList(list) {
            localStorage.setItem('todo_list', JSON.stringify(list));
        },

        create_list() {
            const data = {
                id: this.list.length + 1,
                name: this.name,
                list_end: false
            }

            $('#create_list').modal('hide');
            this.name = null;
            this.list.push(data)
            this.setToList(this.list);
        },

        setlist_end(id){
            let list = this.list.filter(c => c.id == id)
            list.forEach(element => {
                element.list_end = !element.list_end
            });
            this.setToList(this.list);
        },

        delete_list(id){
            this.list = this.list.filter(c => c.id != id);
            this.setToList(this.list);
        }
    },
}

Vue.createApp(app).mount('#app');