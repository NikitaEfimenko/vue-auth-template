<template>
  <v-layout align-center justify-center>
    <v-card width="600px" color="grey lighten-4">
      <v-card-title>
        <p>Dashboard</p>
        <v-spacer />
        <v-icon color="grey" size="40">fas fa-chart-line</v-icon>
      </v-card-title>
      <v-sheet color="transparent" class="v-sheet--offset mx-auto" max-width="calc(100% - 32px)">
        <v-sparkline
          :value="value1"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :show-labels="true"
          :auto-line-width="autoLineWidth"
          auto-draw
        ></v-sparkline>
      </v-sheet>
      <v-divider/>
      <v-sheet color="transparent" class="v-sheet--offset mx-auto" max-width="calc(100% - 32px)">
        <v-sparkline
          :value="value2"
          :gradient="gradients[4]"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
        ></v-sparkline>
      </v-sheet>
    </v-card>
  </v-layout>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];
export default {
  name: "dashboard",
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value1: [1023, 1310, 2141, 3243, 1242, 4343, 4835, 6533, 5235, 4636, 4425],
    value2: [3,4,10,2,10,5,6,2,3,12,5,6,2,3],
    gradientDirection: "top",
    gradients,
    fill: true,
    type: "trend",
    autoLineWidth: false
  })
};
</script>

<style>
</style>