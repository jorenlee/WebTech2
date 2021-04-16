<template>
     <ion-page>
          <ion-content :fullscreen="true">
               <Header />
               <Hero />
               <div class="section3">
                    <Events />
                    <Calendar />
               </div>
               <Footer />
          </ion-content>
     </ion-page>
</template>  

<script lang="ts">
     import { IonContent, IonPage } from "@ionic/vue";

     import Header from "../components/Header.vue";
     import Hero from "../components/Hero.vue";
     import Events from "../components/Events.vue";
     import Calendar from "../components/Calendar.vue";
     import Footer from "../components/Footer.vue";

     import { defineComponent } from "vue";

     export default defineComponent({
          name: "Home",
          components: {
               IonContent,
               IonPage,
               Header,
               Hero,
               Events,
               Calendar,
               Footer,
          },
     });
</script>