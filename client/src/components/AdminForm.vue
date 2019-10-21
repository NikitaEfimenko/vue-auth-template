<template>
  <v-card>
		<v-card-title>
			<span class='headline'> {{ title }} </span>
		</v-card-title>
		<v-card-text>
			<v-container>
				<v-row>
					<v-col cols="4">
            <v-text-field 
							v-model="model.login" 
							label="Login">
						</v-text-field>
          </v-col>
					<v-col align='right' cols="4">
            <v-switch
							v-model="model.gender" 
						>
							<template v-slot:label>
								<v-slide-x-transition>
									<v-icon :color='model.gender ? "red" : "blue"' size='30'>{{ !model.gender ? 'fas fa-venus' : 'fas fa-mars'}}</v-icon>
								</v-slide-x-transition>
							</template>
						</v-switch>
          </v-col>
					<v-col align='right' cols="4">
            <v-switch
							v-model="model.admin" 
						>
							<template v-slot:label>
								<v-slide-x-transition>
									<v-icon size='30'>{{ model.admin ? 'fas fa-user-shield' : 'fas fa-user' }}</v-icon>
								</v-slide-x-transition>
							</template>
						</v-switch>
          </v-col>
					<v-col cols="12">
            <v-text-field
							v-model="model.password" 
							:type="show1 ? 'text' : 'password'"
							:append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
							@click:append="show1 = !show1"
							label="Password">
						</v-text-field>
          </v-col>
					<v-col cols="12">
            <v-text-field 
							v-model="model.confirm"
							:type="show2 ? 'text' : 'password'"
							@click:append="show2 = !show2"
							:append-icon="show2 ? 'fas fa-eye' : 'fas fa-eye-slash'"
							label="Confirm password">
						</v-text-field>
          </v-col>
				</v-row>
			</v-container>
		</v-card-text>
		<v-card-actions>
      <v-spacer></v-spacer>
        <v-btn color="darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="darken-1" text @click="save">Save</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
export default {
	name: 'admin-form',
	props: ['title', 'value'],
	data() {
		return {
			show1: false,
			show2: false,
			snackbar: false,
			model: {
				name: null,
				gender: null,
				password: null,
				confirm: null,
				admin: null
			}
		}
	},
	watch: {
		value(nV, oV) {
			this.model = {
				...nV,
				password: null,
				confirm: null
			}
		}
	},
	methods: {
		close() {
			this.$emit('close')
		},
		save() {
			if (this.model.confirm === this.model.password) {
				const { confirm, ...rest} = this.model
				this.$emit('save', { ...rest })
			} else {
				this.$emit('error')
			}
		}
	}
}
</script>

<style>

</style>