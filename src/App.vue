<template>
  <div id="app">
    <!--需要缓存的-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>

        <!--不需要缓存的-->
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<style lang="less">
</style>
