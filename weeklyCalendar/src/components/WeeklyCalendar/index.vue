<template>
  <div id="weeklyCalendar">
    <p id="scheduleTitle">
      <span>TIME</span>
      <span>Mon</span>
      <span>Tus</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Stat</span>
      <span>Sun</span>
    </p>
    <scroll-bar ref="scrollBar">
      <div id="scheduleContainer">
        <div class="time">
          <div v-for="item in times" :style="{'height': timeHeight + 'px'}">
            {{ item }}
          </div>
        </div>
        <div class="schedule" v-for="item in weekSchedule">
          <div v-for="(temp, index) in item" :style="setScheduleItemStyle(item, index)">
            {{ temp.remark }}
          </div>
        </div>
      </div>
    </scroll-bar>
  </div>
</template>

<script>
  import ScrollBar from '@/components/ScrollBar'

  const START_TIME = '8:00'

  export default {
    name: 'WeeklyCalendar',
    components: {
      ScrollBar
    },
    props: {
      timeStep: {
        type: Number,
        default: 5
      },
      perStepHeight: {
        type: Number,
        default: 6
      },
      weekSchedule: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        timeHeight: 0,
        times: ['8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
      }
    },
    mounted() {
      this.timeHeight = 60 / this.timeStep * this.perStepHeight;
    },
    methods: {
      setScheduleItemStyle(schedule, index) {
        let item = schedule[index];
        let lastEnd = index ? schedule[index - 1].end : START_TIME;
        // 计算第index个元素的margin
        let lastEndTime = this.moment().hour(Number(lastEnd.split(':')[0])).minute(Number(lastEnd.split(':')[1])).second(
          0);
        let scheduleStartTime = this.moment().hour(Number(item.start.split(':')[0])).minute(Number(item.start.split(':')[
          1])).second(0);
        let margin = scheduleStartTime.diff(lastEndTime, 'minutes') / this.timeStep * this.perStepHeight;
        // 计算第index个元素的height
        let scheduleEndTime = this.moment().hour(Number(item.end.split(':')[0])).minute(Number(item.end.split(':')[1]))
          .second(0);
        let height = scheduleEndTime.diff(scheduleStartTime, 'minutes') / this.timeStep * this.perStepHeight;
        return {
          'margin-top': margin + 'px',
          'height': height + 'px'
        };
      }
    }
  }

</script>

<style lang="scss" scoped>
  $admin-base-color: #B777C0;

  #weeklyCalendar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #scheduleTitle {
    width: 100%;
    display: flex;
    margin: 0;
    background-color: $admin-base-color;
    color: #fff;
    padding: 10px 0;
    font-size: 18px;
    font-weight: bold;

    span {
      flex: 1;
      text-align: center;
    }
  }

  #scheduleContainer {
    flex-grow: 1;
    display: flex;

    .time,
    .schedule {
      flex: 1;
      text-align: center;
      box-sizing: border-box;
    }

    .time,
    .schedule:nth-child(odd) {
      background: #fff;
    }

    .schedule:nth-child(even) {
      background-color: #F3ECF4;
    }

    .time {
      font-size: 24px;
      font-weight: bold;
      color: $admin-base-color;

      &>div {
        padding: 5px;
        box-sizing: border-box;
      }
    }

    .schedule {
      &>div {
        padding: 5px;
        box-sizing: border-box;
        background-color: #DEDBFA;
      }
    }
  }

</style>
