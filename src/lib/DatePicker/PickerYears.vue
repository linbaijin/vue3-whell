<template>
  <div class="ls-years-picker">
    <div class="ls-date-picker__popover-header">
      <span class="ls-date-picker__popover-header-pre" @click="changeYear(-10)">‹</span>
      <span class="ls-date-picker__popover-header-info">{{ startYear }}-{{ endYear }}</span>
      <span class="ls-date-picker__popover-header-next" @click="changeYear(10)">›</span>
    </div>
    <div class="ls-date-picker__popover-content">
      <div class="ls-date-picker__years">
        <div class="ls-date-picker__years-row" v-for="(row, i) in years" :key="`${row}-${i}`">
          <div
            class="ls-date-picker__years-cell"
            :class="yearClasses(cell)"
            v-for="(cell, j) in row"
            :key="`${cell}-${j}`"
            @click="onClickYear(cell)"
          >
            {{ cell }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
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
    const startYear = computed(() => {
      const { year } = props.formatDate
      return year - (year % 10)
    })
    const endYear = computed(() => {
      return startYear.value + 9
    })
    const years = computed(() => {
      const arr = []
      for (let i = startYear.value; i <= endYear.value; i++) {
        arr.push(i)
      }
      return toMatrix(arr, 4)
    })
    const isSameYear = (year: number) => {
      if (props.value instanceof Date) {
        const [year2] = getYearMonthDay(props.value)
        return year === year2
      }
    }

    const isCurrentYear = (year: number) => {
      const [year2] = getYearMonthDay(new Date())
      return year === year2
    }
    const yearClasses = (year: number) => {
      return {
        active: isSameYear(year),
        current: isCurrentYear(year),
      }
    }
    const changeYear = (value) => {
      if (props.tempdate instanceof Date) {
        const [year] = getYearMonthDay(props.tempdate)
        const timestamp = cloneDate(props.tempdate).setFullYear(year + value)
        context.emit('update:tempdate', new Date(timestamp))
      }
    }
    const onClickYear = (year: number) => {
      const { month, day } = props.formatDate
      context.emit('update:tempdate', new Date(year, month, day))
      context.emit('modeChange', 'month')
    }
    return {
      startYear,
      endYear,
      years,
      changeYear,
      onClickYear,
      yearClasses
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
.ls-date-picker {
  &__years {
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
