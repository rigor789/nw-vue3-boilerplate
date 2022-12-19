<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <StackLayout class="greetings">
    <Label class="green" data-test="message">{{ message }}</Label>
    <Label textWrap marginTop="16">
      This boilerplate uses <ExternalLink name="NW.js" url="nwjs.io" /> +
      <ExternalLink name="Vite" url="vitejs.dev" /> +
      <ExternalLink name="Vue 3" url="vuejs.org" /> +
      <ExternalLink name="Pinia" url="pinia.vuejs.org" /> + the
      <ExternalLink
        name="superior Options API"
        url="docs.google.com/presentation/d/1fsDhn_MptD6c-_ALgurQtvaRFkfbfukbbFGfEfckzvk/edit?usp=sharing"
      />.
    </Label>
  </StackLayout>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {
    ExternalLink: {
      props: ["name"],
      render: (props) => props.name,
    },
  },
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    openAppInBrowser: function () {
      if (this.isDesktop) {
        this.nw.Shell.openExternal(window.location.href);
      }
    },
  },
  computed: {
    isDevMode: function () {
      return this.isDesktop && this.process.versions["nw-flavor"] === "sdk";
    },
  },
};
</script>

<style>
.green {
  color: hsla(160, 100%, 37%, 1);
  font-size: 24;
  font-weight: bold;
  text-align: center;
  margin-top: 16;
}
</style>
