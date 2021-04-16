<template>
     <ion-page>
          <ion-content class="login-page-content" fullscreen scrollY="false">
               <div class="container">
                    <a href="https://app.lsu-source.io" target="_blank" class="link">
                         <img src="../../assets/source-logo.png" class="logo">
                         <ion-label class="title">
                              <span class="org">
                                   Student Organization Utilizing the Realm of Computer Eclecticism
                              </span>
                              <span class="site">
                                   app.lsu-source.io
                              </span>
                         </ion-label>
                    </a>
                    <ion-button class="login-btn" @click="login(pushToken)">
                         <img src="../../assets/btn/login-with-google.jpg" class="">
                    </ion-button>
               </div>
          </ion-content>
     </ion-page>
</template>  

<script lang="ts">
     import { IonContent, IonPage, IonLabel, IonButton, popoverController } from '@ionic/vue';
     import { defineComponent } from "vue";
     import firebase from 'firebase';
     import { mapActions } from 'vuex';

     export default defineComponent({
          name: "LoginPage",
          components: {
               IonContent,
               IonPage,
               IonLabel,
               IonButton,
          },
          data() {
               return {
                    pushToken: '' as string,
               };
          },
          async created() {
               try {
                    if (firebase.messaging.isSupported()) {
                         await firebase.messaging().requestPermission();
                         console.log('Notification permission granted.');
                         this.pushToken = await firebase.messaging().getToken();
                    }
               } catch (e) {
                    console.log(e);
               }
          },
          async ionViewWillEnter() {
               popoverController.dismiss();
          },
          methods: {
               ...mapActions('user', ['getCallback', 'login']),
               ...mapActions('ui', ['showToast']),
          },
     });
</script>