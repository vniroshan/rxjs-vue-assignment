<template>
  <div class="d-flex justify-center pt-3">
    <div>
      <h1>{{formattedTime}}</h1>
      <div class="text-center pt-3">
        <v-btn @click="startStopwatch" color="primary">Start</v-btn>
      </div>
      <div class="text-center pt-3">
        <v-btn @click="stopStopwatch" color="primary">Stop</v-btn>
      </div>
      <div class="text-center pt-3">
        <v-btn @click="resetStopwatch" color="primary">Reset</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

export default {
  data() {
    return {
      time: 0,
      stopwatch$: null
    }
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  },
  methods: {
    startStopwatch() {
      if (!this.stopwatch$) {
        this.stopwatch$ = interval(1000).pipe(
          map(() => this.time++)
        ).subscribe();
      }
    },
    stopStopwatch() {
      if (this.stopwatch$) {
        this.stopwatch$.unsubscribe();
        this.stopwatch$ = null;
      }
    },
    resetStopwatch() {
      this.time = 0;
    }
  }
}
</script>

