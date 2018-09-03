<template>
  <div>
    <dl v-for="(price, name) in best" :key="name">
      <dt>
        <b>{{ name }} {{ sample(price) }}</b>
      </dt>
      <dd>
        <dl v-for="_ in sortBy(map(price, function (v, _) { return _ }), 'desc')" :key="_">
          {{ _ }}
        </dl>
      </dd>
    </dl>
  </div>
</template>

<script>
import sample from 'lodash/sample'
import min from 'lodash/min'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
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
      dates: getDate(18)
    }
  },
  created () {
    this.init()
  },
  methods: {
    map,
    sortBy,
    sample,
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
      const cache = sessionStorage.getItem('airasia')
      if (cache) {
        this.prices = JSON.parse(cache)
        return
      }
      this.dates.forEach(d => {
        this.routes.forEach(r => {
          const [currency, departure, destination] = r
          const go = [api(currency)(departure)(destination)/* one way */, /* and *//* return */api(currency)(destination)(departure)]
          go.forEach(g => fetch(g(d))
            .then(response => response.status === 200 && response.json())
            .then(data => {
              if (data) {
                this.$set(this, 'prices', merge(this.prices, data))
                sessionStorage.setItem('airasia', JSON.stringify(this.prices))
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

<style scoped>
  dl,
  dt,
  dd {
    padding: 0;
    margin: 0;
  }

  dl {
    display: inline;
  }
</style>
