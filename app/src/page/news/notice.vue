<template>
  <div>
                             <div id="clock">
                           <p class="date">{{ date }}</p>
                           <p class="time">{{ time }}</p>
                          </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      time: '',
      week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }
  },
  mounted: function () {
    // 定时执行更新时间的方法
    let _this = this
    _this.$nextTick(function () {
      setInterval(_this.updateTime, 1000)
    })
  },
  methods: {
    updateTime: function () {
      let _this = this
      let cd = new Date()
      // this.date;
      this.time = _this.zeroPadding(cd.getHours(), 2) + ':' +
      _this.zeroPadding(cd.getMinutes(), 2) + ':' +
      _this.zeroPadding(cd.getSeconds(), 2)
      _this.date = _this.zeroPadding(cd.getFullYear(), 4) + '-' +
      _this.zeroPadding(cd.getMonth() + 1, 2) + '-' +
      _this.zeroPadding(cd.getDate(), 2) + ' ' +
      _this.week[cd.getDay()]
    },
    // 更新时间的辅助方法
    zeroPadding: function (num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style scoped>
</style>
