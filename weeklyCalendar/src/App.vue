<template>
  <div id="app">
    <weekly-calendar :weekSchedule="weekSchedule"></weekly-calendar>
  </div>
</template>

<script>
  import WeeklyCalendar from '@/components/WeeklyCalendar'

  export default {
    name: 'App',
    data() {
      return {
        weekSchedule: {
          Mon: [{
            start: '8:05',
            end: '10:45',
            remark: '8:05-10:45 East Classroom Math'
          }, {
            start: '14:05',
            end: '16:45',
            remark: '14:05-16:45 East Classroom Math'
          }],
          Tus: [],
          Wed: [{
            start: '12:05',
            end: '13:25',
            remark: '12:05-13:25 East Classroom Math'
          }],
          Thu: [],
          Fri: [],
          Stat: [],
          Sun: [],
        }
      }
    },
    components: {
      WeeklyCalendar
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 800px;
    height: 500px;
  }

</style>
