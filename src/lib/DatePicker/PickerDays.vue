<template>
  <div class="ls-days-picker">
    <div class="ls-date-picker__popover-header">
      <span class="ls-date-picker__popover-header-pre" @click="changeMonth(-1)">‹</span>
      <span class="ls-date-picker__popover-header-info"
        >{{ formatDate.year }}年{{ formatDate.month }}月{{ formatDate.day }}日</span
      >
      <span class="ls-date-picker__popover-header-next" @click="changeMonth(1)">›</span>
    </div>
    <div class="ls-date-picker__popover-content">
      <div class="ls-date-picker__days">
        <div class="ls-date-picker__weeks">
          <div class="ls-date-picker__week-cell" v-for="week in weeks" :key="`ls-week-${week}`">
            {{ week }}
          </div>
        </div>
        <div class="ls-date-picker__days-row" v-for="(row, i) in days" :key="`${row}-${i}`">
          <div
            class="ls-date-picker__days-cell"
            :class="dayClasses(cell)"
            v-for="(cell, j) in row"
            :key="`${cell}-${j}`"
            @click="onClickDay(cell)"
          >
            {{ getDate(cell) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
import { cloneDate, getYearMonthDay, getPreMonthLastDay, getCurrentMonthLastDay } from './tools'
import { toMatrix } from '../../helper/utils'
interface DaysArrItem {
  date: Date
  status: 'prev' | 'current' | 'next'
}
export default {
  props: {
    value: {
      type: Date,
      default: () => new Date(),
      required: true,
    },
    tempDate: {
      type: Date,
      default: () => new Date(),
      required: true,
    },
    formatDate: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  components: {},
  watch:{
    tempDate() {
      console.log('tempDate发生了变化', this.tempDate)
    }
  },
  setup(props, context) {
    const changeMonth = (value: number) => {
      if (props.tempDate instanceof Date) {
        const [, month] = getYearMonthDay(props.tempDate)
        const timestamp = cloneDate(props.tempDate).setMonth(month + value)
        context.emit('update:tempDate', new Date(timestamp))
      }
    }
    const getPrevMonthDays = (prevLastDay: number, startWeek: number) => {
      const prevMonthDays: DaysArrItem[] = []
      if (props.tempDate instanceof Date) {
        const [year, month] = getYearMonthDay(props.tempDate)
        for (let i = prevLastDay - startWeek + 1; i <= prevLastDay; i++) {
          prevMonthDays.push({
            date: new Date(year, month - 1, i),
            status: 'prev',
          })
        }
      } else {
        throw new Error('props.tempDate is not Date type')
      }
      return prevMonthDays
    }
    const getCurrentDays = (curLastDay: number) => {
      console.log('getCurrentDays', curLastDay)
      const currMonthDays: DaysArrItem[] = []
      if (props.tempDate instanceof Date) {
        const [year, month] = getYearMonthDay(props.tempDate)
        for (let i = 1; i <= curLastDay; i++) {
          currMonthDays.push({
            date: new Date(year, month, i),
            status: 'current',
          })
        }
      } else {
        throw new Error('props.tempDate is not Date type')
      }
      return currMonthDays
    }
    const getNextMonthDays = (curLastDay: number, startWeek: number) => {
      const nextMonthDays: DaysArrItem[] = []
      if (props.tempDate instanceof Date) {
        const [year, month] = getYearMonthDay(props.tempDate)
        for (let i = 1; i <= 42 - curLastDay - startWeek; i++) {
          nextMonthDays.push({
            date: new Date(year, month + 1, i),
            status: 'next',
          })
        }
      } else {
        throw new Error('props.tempDate is not Date type')
      }
      return nextMonthDays
    }
    const weeks = ['日', '一', '二', '三', '四', '五', '六']
    const days = computed(() => {
      console.log('!!!')
      if (props.tempDate instanceof Date) {
        const [year, month] = getYearMonthDay(props.tempDate)
        let startWeek = new Date(year, month, 1).getDay()
        if (startWeek === 0) {
          startWeek = 7
        }
        const prevLastDay = getPreMonthLastDay(year, month)
        const curLastDay = getCurrentMonthLastDay(year, month)
        const day = [
          ...getPrevMonthDays(prevLastDay, startWeek),
          ...getCurrentDays(curLastDay),
          ...getNextMonthDays(curLastDay, startWeek),
        ]
        console.log('day!', day)
        return toMatrix(day, 7)
      }
    })
    const getDate = (cell: DaysArrItem) => {
      return cell.date.getDate()
    }
    const isSameDay = (date1: Date, date2: Date) => {
      const [y1, m1, d1] = getYearMonthDay(date1)
      const [y2, m2, d2] = getYearMonthDay(date2)
      return y1 === y2 && m1 === m2 && d1 === d2
    }
    const dayClasses = (cell: DaysArrItem) => {
      return {
        prev: cell.status === 'prev',
        next: cell.status === 'next',
        active: props.value instanceof Date && isSameDay(cell.date, props.value),
      }
    }
    const onClickDay = ({ date }: { date: Date }) => {
      context.emit('clickDay', date)
    }
    console.log('days', days)
    return {
      weeks,
      days,
      getDate,
      dayClasses,
      onClickDay,
      changeMonth,
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
@mixin datepickercell() {
  width: $date-picker-cell-size;
  height: $date-picker-cell-size;
  line-height: $date-picker-cell-size;
  text-align: center;
}
.ls-date-picker {
  &__popover-header {
    display: flex;
    &-info {
      flex: 1;
      text-align: center;
      line-height: $date-picker-cell-size;
    }
    &-pre,
    &-next {
      cursor: pointer;
      @include datepickercell();
    }
  }
  // &__popover-content {

  // }
  &__weeks {
    display: flex;
  }
  &__week-cell {
    @include datepickercell();
  }
  &__days {
    &-row {
      display: flex;
    }
    &-cell {
      cursor: pointer;
      border-radius: 50%;
      &:hover {
        background-color: #eee;
      }
      @include datepickercell();
      &.prev,
      &.next {
        color: #adb5bd;
        font-weight: 300;
      }
      &.active {
        color: #fff;
        background-color: #11cdef;
      }
    }
  }
}
</style>
