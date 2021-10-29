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
import { computed } from 'vue'
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
  },
  components: {},
  setup(props, context) {
    console.log('props!', { ...props })
    const changeMonth = (value: number) => {
      if (props.tempdate instanceof Date) {
        console.log('changeMonth!', value)
        const [, month] = getYearMonthDay(props.tempdate)
        const timestamp = cloneDate(props.tempdate).setMonth(month + value)
        context.emit('update:tempdate', new Date(timestamp))
      }
    }
    const getPrevMonthDays = (prevLastDay: number, startWeek: number) => {
      const prevMonthDays: DaysArrItem[] = []
      if (props.tempdate instanceof Date) {
        const [year, month] = getYearMonthDay(props.tempdate)
        for (let i = prevLastDay - startWeek + 1; i <= prevLastDay; i++) {
          prevMonthDays.push({
            date: new Date(year, month - 1, i),
            status: 'prev',
          })
        }
      } else {
        throw new Error('props.tempdate is not Date type')
      }
      return prevMonthDays
    }
    const getCurrentDays = (curLastDay: number) => {
      console.log('getCurrentDays', curLastDay)
      const currMonthDays: DaysArrItem[] = []
      if (props.tempdate instanceof Date) {
        const [year, month] = getYearMonthDay(props.tempdate)
        for (let i = 1; i <= curLastDay; i++) {
          currMonthDays.push({
            date: new Date(year, month, i),
            status: 'current',
          })
        }
      } else {
        throw new Error('props.tempdate is not Date type')
      }
      return currMonthDays
    }
    const getNextMonthDays = (curLastDay: number, startWeek: number) => {
      const nextMonthDays: DaysArrItem[] = []
      if (props.tempdate instanceof Date) {
        const [year, month] = getYearMonthDay(props.tempdate)
        for (let i = 1; i <= 42 - curLastDay - startWeek; i++) {
          nextMonthDays.push({
            date: new Date(year, month + 1, i),
            status: 'next',
          })
        }
      } else {
        throw new Error('props.tempdate is not Date type')
      }
      return nextMonthDays
    }
    const weeks = ['日', '一', '二', '三', '四', '五', '六']
    const days = computed(() => {
      if (props.tempdate instanceof Date) {
        const [year, month] = getYearMonthDay(props.tempdate)
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
        return toMatrix(day, 7)
      } else {
        throw new Error('props.tempdate is not Date type')
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
    const isToday = (date) => {
      const [y1, m1, d1] = getYearMonthDay(date)
      const [y2, m2, d2] = getYearMonthDay(new Date())
      return y1 === y2 && m1 === m2 && d1 === d2
    }
    const dayClasses = (cell: DaysArrItem) => {
      return {
        prev: cell.status === 'prev',
        next: cell.status === 'next',
        active: props.value instanceof Date && isSameDay(cell.date, props.value),
        today: isToday(cell.date),
      }
    }
    const onClickDay = ({ date }: { date: Date }) => {
      context.emit('clickDay', date)
    }
    const onClickInfo = () => {
      context.emit('modeChange', 'picker-month')
    }
    console.log('days', days)
    return {
      weeks,
      days,
      getDate,
      dayClasses,
      onClickDay,
      changeMonth,
      onClickInfo
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
  user-select: none;
}
.ls-date-picker {
  &__popover-header {
    display: flex;
    &-info {
      flex: 1;
      text-align: center;
      line-height: $date-picker-cell-size;
      border-radius: 6px;
      &:hover {
        background-color: #eee;
      }
    }
    &-pre,
    &-next {
      cursor: pointer;
      border-radius: 6px;
      @include datepickercell();
      &:hover {
        background-color: #eee;
      }
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
      &.today {
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
