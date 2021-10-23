<template>
    <div class="ls-date-picker" ref="datePicker">
        <div class="ls-date-picker__input" @click="onClickInput">
            <input type="text" readonly>
        </div>
        <div class="ls-date-picker__popover" v-show="popoverVisible">
            popover
        </div>
    </div>
</template>

<script lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
export default {
    name: 'DatePicker',
    props: {

    },
    components: {

    },
    setup(props, context) {
        const datePicker = ref<HTMLDivElement>(null)
        const popoverVisible = ref(false)
        const onClickBody:EventListener = (e:MouseEvent) => {
            console.log(e.target)
           if(datePicker.value.contains(e.target as Node)) {
               return
           }
           popoverVisible.value = false
        }
        const onClickInput = () => {
            popoverVisible.value = true
        }
        onMounted(() => {
            console.log(datePicker.value)
            document.body.addEventListener('click', onClickBody)
        })
        onBeforeUnmount(() => {

        })
        return {
            datePicker,
            popoverVisible,
            onClickInput
        };
    },
};
</script>

<style lang="scss">
.ls-date-picker {
    &__input {
        padding: 10px 12px;
        box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
        & > input {
            color: #8898aa;
            border: none;
            outline: none;
        }
    }
}
</style>
