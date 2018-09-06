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
  $main-color: black;
  $duration: 1s;
  $dot-duration: 3s;
  $delay: 1s;
  $ease: cubic-bezier(.1,0,1,.32);
  $function: forwards;

  .opening {
    margin: 0;
    color: $main-color;
    font-size: 1.4em;
  }

  .opening {
    display: flex;
    line-height: 1;
  }

  div {
    position: relative;
    display: flex;
    padding: 0 0.185rem;
    overflow: hidden;

    &:nth-child(1) > .inner {
      padding-right: 0.2rem;
      animation: left $duration $ease $delay $function;
    }

    &:nth-child(2) > .inner {
      margin-right: 0.2rem;
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
    animation: dot 1.5 * $duration $ease $delay $function;
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
      transform: translate3d(0, 0, 0);
    }
    66% {
      transform: translate3d(-3rem, 0, 0);
    }
    80% {
      transform: translate3d(-2rem, -1rem, 0);
    }
    99% {
      transform: translate3d(-1rem, 0, 0);
    }
    100% {
      transform: matrix(1, 0, 0, 1, -14, 0);
    }
  }
</style>
