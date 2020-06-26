<script>
export default {
  data() {
    return {
      loadingPercent: 0,
      loadTime: 0,
      interval: null
    }
  },
  computed: {
    loaded() {
      return this.loadingPercent + '%'
    }
  },
  methods: {
    doProgress() {
      let step = this.loadTime / 100;
      this.interval = setInterval(() => {
        this.loadingPercent++
      }, step);
    }
  },
  watch: {
    loadingPercent(val) {
      if (val >= 100) {
        clearInterval(this.interval)
      }
    }
  },
  created() {
    let perfData = window.performance.timing;
    let estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
    this.loadTime = parseInt((estimatedTime / 1000) % 60) * 100;
    this.doProgress();
  }
}
</script>
