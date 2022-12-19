<template>
  <GridLayout rows="auto, auto" padding="24">
    <Image src="https://art.nativescript-vue.org/NativeScript-Vue.png" height="100" />

    <HelloWorld row="1" :message="message" />
  </GridLayout>
</template>

<script>
import HelloWorld from './components/HelloWorld.native.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    message: function () {
      return 'NativeScript & Vue';
    }
  }
};
</script>
