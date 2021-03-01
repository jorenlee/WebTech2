<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <Game />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { IonContent, IonPage } from '@ionic/vue';
import Game from "./Game.vue"

export default defineComponent({
  name: "Home",
  components: {
    Game,
    IonContent,
    IonPage
  },
});
</script>
