<template>
  <div>
    <dl v-for="(price, name) in best" :key="name">
      <dt v-text="name"/>
      <dd>
        <dl v-for="(_, date) in price" :key="date">
          {{ date }} {{ _ }}
        </dl>
      </dd>
    </dl>
  </div>
</template>

<script>
import min from 'lodash/min'
import map from 'lodash/map'
import forEach from 'lodash/forEach'
import merge from 'lodash/merge'
import api from './api'
import getDate from './getDate'
import routes from './routes'
import fetch from '@/plugin/fetch'

export default {
  data () {
    return {
      best: null,
      prices: null,
      routes,
      dates: getDate(24)
    }
  },
  created () {
    this.init()
  },
  methods: {
    filtrate () {
      this.best = {} // clear
      forEach(this.prices, (p, k) => {
        forEach(this.prices[k], (_, __) => {
          if (!this.best[k]) this.$set(this.best, k, {})
          if (_ === min(map(p, _ => _))) this.$set(this.best[k], __, _)
        })
      })
    },
    init () {
      this.dates.forEach(d => {
        this.routes.forEach(r => {
          const [currency, departure, destination] = r
          const go = [api(currency)(departure)(destination)/* one way */, /* and *//* return */api(currency)(destination)(departure)]
          go.forEach(g => fetch(g(d))
            .then(response => response.status === 200 && response.json())
            .then(data => {
              if (data) {
                this.$set(this, 'prices', merge(this.prices, data))
                this.$nextTick(() => this.filtrate())
              }
            })
            .catch(err => {
              console.error(err)
            }))
        })
      })
    }
  }
}
</script>
