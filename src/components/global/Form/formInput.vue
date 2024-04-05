<template>
    <div class="form-item form-labels">
        <label :for="name" class="form-item-label">{{labelText}}</label>
        <input value="value"
    :type="type"
    class="form-item-input"
    :id="name"
    @input="input">
    <div class="form-error">{{ formError }}</div>
    </div>
    
    
</template>
<script>
export default{
    name: 'formInput',
    emits: ['updateValue'],
    props:{
        value: {
            type: String,
            required: true
        },
        formError:{
            type: String
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default(){
                return 'text'
            }
        },
        labelText:{
            type: String,
            required: true
        },
        rules:{
            type: Object,
            default(){
                return {};
            }
        }
    },
    created() {
    this.$emit('updateValue', {
      name: this.first_name.toLowerCase(),
      value: this.value,
      formError: this.validate(this.value),
    });
  },
    methods:{
        input ($event){
            this.$emit('updateValue', {
                first_name: this.first_name.toLowerCase(),
                value: $event.target.value,
                formError: this.validate($event.target.value)
            })
        },
        validate(value){
            if(this.rules.required && value.length){
                return 'required'
            }
            if(this.rules.min && value.length < this.rules.min){
                return `Min Length is ${this.rules.min}`
            }
    }
    }
    
};
</script>
<style scoped>

    .form-error{
        color: red;
    }
</style>