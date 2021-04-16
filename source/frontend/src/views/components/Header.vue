<template>
	<ion-header class="header">
          <ion-toolbar class="toolbar">
               <div class="content-container">
                    <div class="logo">
                         <a href="#" class="logo-link">
                              <img src="../../assets/source-logo.png" width="70" class="image">
                              <span class="navbrand">SOURCE SOURCE SOURCE SOURCE SOURCE</span>
                         </a>
                    </div>
                    <div class="navmenu">
                         <ul class="list">
                              <li class="item">news</li>
                              <li class="item">about</li>
                              <li class="item">events</li>
                              <li class="item">tutorials</li>
                              <li class="item">contact us</li>
                         </ul>
                    </div>
                    <div class="navmenu">
                         <ul class="list">
                              <li class="item">login</li>
                         </ul>
                    </div>
               </div>
          </ion-toolbar>
     </ion-header>
</template>
<script lang="ts">
	import {
		IonHeader,
		IonToolbar,
	} from "@ionic/vue";

	import { defineComponent } from 'vue';
	export default defineComponent({
          name: 'Header',
          components: {
               IonHeader,
               IonToolbar,
          }
	});
</script>