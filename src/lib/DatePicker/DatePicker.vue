<template>
  <div class="ls-date-picker" ref="datePicker">
    <div class="ls-date-picker__input" @click="onClickInput">
      <input v-model="displayValue" type="text" />
    </div>
    <div class="ls-date-picker__popover" v-show="popoverVisible">popover</div>
  </div>
</template>

<script lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { cloneDate, getYearMonthDay } from './tools'
export default {
  name: 'DatePicker',
  props: {
    value: {
      type: Date,
      default: () => new Date(),
    },
  },
  components: {},
  setup(props, context) {
    const datePicker = ref<HTMLDivElement>(null)
    const popoverVisible = ref(false)

    const tempDate = computed(() => {
      return cloneDate(props.value)
    })
    const formatDate = computed(() => {
        const [year, month, day] = getYearMonthDay(tempDate.value)
        return {
          year,
          month: month + 1,
          day,
        }
    })
    const displayValue = computed<String>({
      get() {
        const [year, month, day] = getYearMonthDay(tempDate.value)
        return `${year}-${month + 1}-${day}`
      },
      set(val) {
          console.log('set!', val)
          const reg = /(\d{4})-(\d{1,2})-(\d{1,2})/
          const matched = val.match(reg)
          console.log(matched)
          if(matched) {
            const [, year, month, day] = matched
            context.emit('update:value', new Date(`${year}-${month + 1}-${day}`))
          }
      },
    })

    const onClickBody: EventListener = (e: MouseEvent) => {
      // console.log(e.target)
      if (datePicker.value.contains(e.target as Node)) {
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
    onBeforeUnmount(() => {})
    return {
      datePicker,
      popoverVisible,
      onClickInput,
      formatDate,
      displayValue
    }
  },
}
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
