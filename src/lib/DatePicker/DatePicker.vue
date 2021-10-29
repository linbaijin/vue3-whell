<template>
  <div class="ls-date-picker" ref="datePicker">
    <div class="ls-date-picker__input" @click="onClickInput">
      <input v-model="displayValue" type="text" />
    </div>
    <div class="ls-date-picker__popover" v-show="popoverVisible">
      <keep-alive>
        <component
          :is="currentComponent"
          v-model:tempdate="tempDate"
          :value="modelValue"
          :formatDate="formatDate"
          @clickCell="onClickDay"
          @modeChange="onModeChange"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import { cloneDate, getYearMonthDay } from './tools'
import PickerDays from './PickerDays.vue'
import PickerMonths from './PickerMonths.vue'
type PickerModel = 'day' | 'month' | 'year'
export default {
  name: 'DatePicker',
  props: {
    modelValue: {
      type: Date,
      default: () => new Date(),
    },
  },
  components: {
    PickerDays,
    PickerMonths,
  },
  setup(props, context) {
    const pickerMode = ref<PickerModel>('day')
    const currentComponent = computed(() => {
      const componentMap = {
        day: PickerDays,
        month: PickerMonths,
      }
      return componentMap[pickerMode.value]
    })
    const datePicker = ref<HTMLDivElement>()
    const popoverVisible = ref(false)
    const tempDate = ref(cloneDate(props.modelValue))
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
        if (props.modelValue instanceof Date) {
          const [year, month, day] = getYearMonthDay(props.modelValue)
          return `${year}-${month + 1}-${day}`
        }
      },
      set(val) {
        console.log('set!', val)
        const reg = /(\d{4})-(\d{1,2})-(\d{1,2})/
        const matched = val.match(reg)
        console.log(matched)
        if (matched) {
          const [, year, month, day] = matched
          context.emit('update:modelValue', new Date(`${year}-${month + 1}-0${day}`))
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
    // onBeforeUnmount(() => {})
    const onClickDay = (date: Date) => {
      context.emit('update:modelValue', date)
      tempDate.value = date
    }
    const onModeChange = (mode: PickerModel) => {
      setTimeout(() => {
        pickerMode.value = mode
      })
    }
    return {
      datePicker,
      popoverVisible,
      onClickInput,
      formatDate,
      displayValue,
      onClickDay,
      tempDate,
      currentComponent,
      onModeChange,
    }
  },
}
</script>

<style lang="scss">
.ls-date-picker {
  position: relative;
  &__input {
    padding: 10px 12px;
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    & > input {
      color: #8898aa;
      border: none;
      outline: none;
    }
  }
  &__popover {
    color: #65708c;
    padding: 20px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 10px 50px 0 rgb(0 0 0 / 20%);
    z-index: 10;
    position: absolute;
    top: calc(100% + 10px);
    left: 36px;
  }
}
</style>
