const  { createApp } = Vue; //initialize Vue

createApp ({
    data() {  //Vue section for data
        return {
            rngEmailList: [],
            show: false,
        }
    },
    methods() { //Vue section for function

    },
    beforeMount(){
        for(let i=0; i<=10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                this.rngEmailList.push(response.data);
                if  (i === 10) {this.show = true}
            });
        }
    },
}).mount('#app');

