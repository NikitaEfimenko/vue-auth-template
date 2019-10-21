<template>
  <div>
    <v-navigation-drawer v-model="model" :mini-variant="mini" temporary app overflow>
      <v-list>
        <v-list-item>
          <v-icon @click.stop='model = false'>fas fa-arrow-left </v-icon>
          <v-spacer/>
          <transition name='slide-fade'>
            <template v-if='model'>
              <span class='headline'>ITFB</span>
            </template>
          </transition> 
        </v-list-item>
        <v-divider/>
        <template v-for="item in menu">
          <v-divider v-if="item.divider" :key="item.route" dark class="my-2" />
          <v-list-item v-else-if='!item.closed' :key="item.route" @click="$router.push({name: item.route})">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="model = !model">
        <v-icon>fas fa-city </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>ITFB</v-toolbar-title>
      <v-spacer/>
      <v-menu v-if='isAuth' offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
          icon
        >
          <v-icon color='grey' size='30'>fas fa-user</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="$router.push({name: item.route})"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ROUTES } from '../constants'
export default {
  name: "navigation",
  data() {
    return {
      model: null,
      mini: false,
      items: [
        { title: 'Profile' , route: ROUTES.profile},
        { title: 'Exit' , route: ROUTES.auth},
      ],
	}},
	computed: {
		...mapState('session', {
			isAdmin: state => {
				return state.user.roles.includes('admin')
      },
      user: state => state.user,
      isAuth: state => !!state.token
    }),
		menu() {
			return [
        {
          title: "Profile",
          route: ROUTES.profile,
					icon: "fas fa-user",
        },
        { divider: true },
        {
          title: "Users",
          route: ROUTES.user,
          icon: "fas fa-user-friends"
        },
        {
          title: "Admin",
          route: ROUTES.admin,
					icon: "fas fa-user-shield",
					closed: !this.isAdmin
        },
        {
          title: "Dashboard",
          route: ROUTES.dashboard,
					icon: "fas fa-chart-line",
					closed: !this.isAdmin
        },
        { divider: true },
        {
          title: "Exit",
          route: ROUTES.auth,
          icon: "fas fa-door-open"
        }
      ]
    }
	}
};
</script>

<style>
.closed {
	background: #999;
	text-decoration: underline;
}
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-200px);
  opacity: 0;
}
</style>