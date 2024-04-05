<template>
    <button class="global-button" :disabled="disabled">{{ text }}</button>
</template>
<script>
export default{
    name: 'formButton',
    props:{
        text:{
            type: String,
            required: true
        },
        disabled:{
            type: Boolean,
            required: false
        }
    }
}
</script>