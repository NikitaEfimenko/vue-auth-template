<template>
  <v-layout align-center justify-center>
  <v-snackbar v-model='snackbar' :timeout='2000'>
    {{ snackText }}
  </v-snackbar>
  <v-card>
    <v-dialog v-if='isAdmin' width="600" v-model='dialog'>
      <admin-form 
        v-model='editedItem'
        :title='title'
        @save='e => (save(e), close())'
        @close='close'
        @error='onError'
      />
    </v-dialog >
    <v-card-title>
      <v-btn v-if='isAdmin' @click.stop='newItem()' color="grey" dark absolute bottom left fab>
        <v-icon>fas fa-user-plus</v-icon>
      </v-btn>
      Users
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="fas fa-search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="loading"
    :items-per-page="6"
    class="elevation-1"
  >
    <template v-slot:body='{ items }'>
      <tr v-for='(item, id) in items' :key='item.name' :class='{ "back": id%2 }'>
        <td class='text-start'>{{item.id}}</td>
        <td class='text-end'>{{item.login}}</td>
        <td class='text-center'>
          <v-icon :color='item.gender ? "red" : "blue"' size='30'>{{item.gender ? 'fas fa-mars' : 'fas fa-venus'}}</v-icon>
        </td>
        <td class='text-end'>
          <v-icon color='grey' size='40'>{{item.admin ? 'fas fa-user-shield' : 'fas fa-user'}}</v-icon>
        </td>
        <td v-if='isAdmin' class='text-right'>
          <span>
          <v-icon small class="mr-2" @click="editItem(item)">
            fas fa-edit
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            fas fa-trash
          </v-icon>
          </span>
        </td>
      </tr>
    </template>
    <template  v-slot:no-data>
        NO DATA HERE!
    </template>
  </v-data-table>
   </v-card>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AdminForm from '@/components/AdminForm.vue';
export default {
 name: 'User',
  components: {
   AdminForm
 },
 data() {
   return {
    title: '',
    dialog: false,
    snackText: '',
     editedItem: {
      login: null,
      gender: null,
      password: null
     },
     snackbar: false,
     defaultAdmin: {
      login: 'Nikita',
      gender: true,
      password: 'qwerty'
     },
     search: null,
     loading: false,
   }
 },
 watch: {
   dialog(val) {
     val || this.close()
   }
 },
 computed: {
   ...mapState('users', {
     items: state => state.users,
   }),
   ...mapState('session', {
     isAdmin: state => {
				return state.user.roles.includes('admin')
      }
   }),
   headers() {
     const def =[{
         text: 'Id',
         value: 'id',
       },
       {
         text: 'Login',
         value: 'login',
          align:'end'
       },
       {
         text: 'Gender',
         value: 'gender',
          align:'center'
       },
       {
         text: 'Role',
         align:'end',
         value: 'admin'
       }]
     return this.isAdmin ? [...def, {text: 'Actions', value:'action', align:'right'}] : def
 }
 },
 methods: {
   ...mapActions('users', [
     'downloadUsers',
     'deleteUser',
     'createUser',
     'editUser'
    ]),
  editItem(item) {
    this.editedItem = Object.assign({edited: true}, { ...item })
    console.log(item)
    this.title = 'Edit'
    this.dialog = true
  },
  onError() {
    this.snackbar = true
    this.snackText = 'Passwords do not match!'
  },
  onSuccess(item) {
    this.snackbar = true
    this.snackText = item.edited ? 'User edited!' : 'User create!'
  },
  newItem() {
    this.editedItem = Object.assign({edited: false}, this.defaultAdmin)
    this.title = 'Create'
    this.dialog = true
  },
  async deleteItem(item) {
    const result = await this.deleteUser(item)
    if (result.status === 200) {
      this.snackbar = true
      this.snackText = 'User deleted!'
    }
  },
  async save(item) {
    const method = item.edited ? this.editUser : this.createUser 
    const result = await method(item)
    if (result.status === 200) this.onSuccess(item)
  },
  close() {
    this.dialog = false
  }
 },
 created(){
   this.loading = true;
   this.downloadUsers().then(() => this.loading = false)
 }
}
</script>

<style>
.back {
  background-color:whitesmoke;
}
</style>