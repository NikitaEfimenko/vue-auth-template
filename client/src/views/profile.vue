<template>
  <v-layout align-center justify-center>
    <v-card class="mx-auto" max-width="344">
      <v-row>
        <v-col cols="12">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{user.roles.join(', ')}}</div>
              <v-list-item-title class="headline mb-4">{{ user.login }}</v-list-item-title>
              <v-list-item-subtitle>{{`#${user.id}`}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-icon size="50" color="white">{{ !user.gender ? 'fas fa-venus' : 'fas fa-mars'}}</v-icon>
            </v-list-item-avatar>
          </v-list-item>
                 <v-divider/>
        </v-col>
        <v-col>
          <v-timeline align-top dense>
            <v-timeline-item color="pink" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>5pm</strong>
                </v-col>
                <v-col>
                  <strong>Backend Stand Up</strong>
                  <div class="caption">New Release</div>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                    ></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="teal lighten-3" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>3pm</strong>
                </v-col>
                <v-col>
                  <strong>Design Stand Up</strong>
                  <div class="caption mb-2">Figma team</div>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                    ></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="pink" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>12pm</strong>
                </v-col>
                <v-col>
                  <strong>Lunch break</strong>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="teal lighten-3" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>9am</strong>
                </v-col>
                <v-col>
                  <strong>JS Stand Up</strong>
                  <div class="caption">JS projects</div>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                    ></v-img>
                  </v-avatar>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                    ></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "profile",
  computed: {
    ...mapState("session", {
      user: state => state.user
    })
  }
};
</script>

<style>
</style>