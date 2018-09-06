<template>
  <div class="opening">
    <div>
      <span class="inner">
        Dear
      </span>
    </div>
    <div>
      <span class="inner">
        red
      </span>
      <span class="dot"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato);

  $main-color: black;
  $duration: 1s;
  $dot-duration: 2s;
  $delay: 0.5s;
  $ease: cubic-bezier(1, 0.01, 0.76, .8);
  $function: infinite;

  .opening {
    display: flex;
    line-height: 1;
  }

  div {
    position: relative;
    display: flex;
    padding: 0 0.1em;
    overflow: hidden;

    &:nth-child(1) > .inner {
      padding-right: 0.2em;
      animation: left $duration $ease $delay $function;
    }

    &:nth-child(2) > .inner {
      animation: right $duration $ease $delay $function;
    }

    & > .inner {
      display: inline-block;
    }
  }

  .dot {
    position: absolute;
    bottom: 3px;
    right: 0;
    display: block;
    width: 3px;
    height: 3px;
    background-color: $main-color;
    border-radius: 50%;
    animation: right $duration $ease $delay $function;
  }

  @keyframes left {
    0% {
      transform: translateX(0%) translate3d(0, 0, 0);
    }
    99% {
      transform: translateX(100%) translate3d(0, 0, 0);
    }
    100% {
      transform: translateX(101%) matrix(1, 0, 0, 1, 0, 0);
    }
  }

  @keyframes right {
    0% {
      transform: translateX(0%) translate3d(0, 0, 0);
    }
    99% {
      transform: translateX(-100%) translate3d(0, 0, 0);
    }
    100% {
      transform: translateX(-101%) matrix(1, 0, 0, 1, 0, 0);
    }
  }

  @keyframes dot {
    0% {
      transform: translateX(0) translate3d(0, 0, 0);
    }
    50% {
      transform: translateX(-100%) translate3d(-100%, 0, 0);
    }
    100% {
      /* transform: matrix(1, 0, 0, 1, -105, 0); */
    }
  }
</style>
