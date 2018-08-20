<template>
  <app-page>
    <app-topbar theme="dark-blue">
      <app-button left>
        <span>left</span>
      </app-button>
      <app-button right disabled>
        <span>right</span>
      </app-button>
      <app-title>
        Hello world
        <at :@="'chongqing'"/>
      </app-title>
    </app-topbar>
  </app-page>
</template>
