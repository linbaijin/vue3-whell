<template>
  <div class="ls-months-picker">
    <div class="ls-date-picker__popover-header">
      <span class="ls-date-picker__popover-header-pre" @click="changeYear(-1)">‹</span>
      <span class="ls-date-picker__popover-header-info" @click="changeMode">{{ formatDate.year }}年</span>
      <span class="ls-date-picker__popover-header-next" @click="changeYear(1)">›</span>
    </div>
    <div class="ls-date-picker__popover-content">
      <div class="ls-date-picker__months">
        <div class="ls-date-picker__months-row" v-for="(row, i) in months" :key="`${row}-${i}`">
          <div
            class="ls-date-picker__months-cell"
            :class="monthClasses(i, j)"
            @click="onClickMonth(i, j)"
            v-for="(cell, j) in row"
            :key="`${cell}-${j}`"
          >
            {{ cell }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { readonly, ref } from 'vue'
import { toMatrix } from '../../helper/utils'
import { cloneDate, getYearMonthDay } from './tools'
export default {
  props: {
    tempdate: {
      type: Date,
      default: () => new Date(),
      required: true,
    },
    formatDate: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    value: {
      type: Date,
      default: () => new Date(),
      required: true,
    },
  },
  components: {},
  setup(props, context) {
    const changeYear = (value) => {
      if (props.tempdate instanceof Date) {
        const [year] = getYearMonthDay(props.tempdate)
        const timestamp = cloneDate(props.tempdate).setFullYear(year + value)
        context.emit('update:tempdate', new Date(timestamp))
      }
    }
    const isCurrentMonth = (month: number) => {
      const year = props.formatDate.year
      const [years, month2] = getYearMonthDay(new Date())
      return year === years && month === month2
    }
    const isSameMonth = (month: number) => {
      if (props.value instanceof Date) {
        const year = props.formatDate.year
        const [years, month2] = getYearMonthDay(props.value)
        return year === years && month === month2
      }
    }
    const monthClasses = (i, j) => {
      const month = j + i * 4
      return {
        active: isSameMonth(month),
        current: isCurrentMonth(month),
      }
    }
    const onClickMonth = (i, j) => {
      console.log('!', props.formatDate)
      const month = j + i * 4
      const { year, day } = props.formatDate
      context.emit('update:tempdate', new Date(year, month, day))
      context.emit('modeChange', 'day')
    }
    const months = readonly(
      ref(
        toMatrix(
          ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          4
        )
      )
    )
    const changeMode = () => {
      context.emit('modeChange', 'year')
    }
    return {
      months,
      changeYear,
      monthClasses,
      onClickMonth,
      changeMode,
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
.ls-date-picker {
  &__months {
    &-row {
      display: flex;
    }
    &-cell {
      font-size: 14px;
      width: 56px;
      text-align: center;
      line-height: 56px;
      border-radius: 6px;
      cursor: pointer;
      user-select: none;
      &:hover {
        background: #eee;
      }
      &.current {
        color: $date-picker-active-color;
      }
      &.active {
        color: #fff;
        background-color: $date-picker-active-color;
      }
    }
  }
}
</style>
