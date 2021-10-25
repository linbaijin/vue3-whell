<template>
  <div class="ls-picker-days">pickerDays</div>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
import { getYearMonthDay, getPreMonthLastDay, getCurrentMonthLastDay } from './tools'
import {toMatrix} from '../../helper/utils'
interface DaysArr {
  date: Date
  status: 'prev' | 'current' | 'next'
}
export default {
  props: {
    tempDate: {
      type: Date,
      default: () => new Date(),
      required: true,
    },
  },
  components: {},
  setup(props, context) {
    const getPrevMonthDays = (prevLastDay: number, startWeek: number) => {
      const prevMonthDays: DaysArr[] = []
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
      const currMonthDays: DaysArr[] = []
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
      const nextMonthDays: DaysArr[] = []
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
        if(props.tempDate instanceof Date) {
            const [year, month] = getYearMonthDay(props.tempDate)
            let startWeek = new Date(year, month, 1).getDay()
            if(startWeek === 0) {
                startWeek = 7
            }
            const prevLastDay = getPreMonthLastDay(year, month)
            const curLastDay = getCurrentMonthLastDay(year, month)
            const day = [...getPrevMonthDays(prevLastDay, startWeek), ...getCurrentDays(curLastDay), ...getNextMonthDays(curLastDay, startWeek)]
            console.log('day!', day)
            return toMatrix(day, 7)
        }
        
    })
    console.log('days', days)
    return {
      weeks,
      days
    }
  },
}
</script>

<style lang="scss"></style>
