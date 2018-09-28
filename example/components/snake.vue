<template>
  <div>111</div>
</template>

<script>
const random = (a, b) => Math.min(a, b) + Math.round(Math.abs(a - b) * Math.random())

export default {
  data () {
    return {
      map: [10, 10],
      snake: null
    }
  },
  props: {
    autoStart: {
      type: Boolean,
      default: false
    },
    startLength: {
      type: Number,
      default: 3
    }
  },
  created () {
    if (this.autoStart) this.start()
  },
  methods: {
    start () {
      this.born()
    },
    ways ([x, y]) {
      const ways = [];
      [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(([_, __]) => {
        const X = x + _
        const Y = y + __
        if (X < 0 || X >= this.map[0] || Y < 0 || Y >= this.map[1]) {
          return
        }
        ways.push([X, Y])
      })
      return ways
    },
    die () {
      this.snake = null
    },
    born () {
      const getWay = point => (ways = this.ways(point)) => ways[random(0, ways.length)]
      const head = [random(0, this.map[0]), random(0, this.map[1])]
      this.snake = [head]
      while (this.snake.length < 3) {
        const way = getWay(this.snake[this.snake.length - 1])()
        if (!way) {
          // born to die
          this.die()
          this.born()
          break
        }
        if (this.snake.indexOf(way) === -1) {
          this.snake.push(way)
        }
      }
      console.log(this.snake)
    }
  }
}
</script>
