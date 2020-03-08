<template>
  <div>
    <v-data-table :headers="headers" :items="indexedItems" item-key="id">
      <template v-slot:item="{ item, isExpanded }">
        {{ isExpanded }}
        <tr @click="isExpanded = !isExpanded">
          <td class="text-xs-right">{{ item.calories }}</td>
          <td class="text-xs-right">{{ item.fat }}</td>
          <td class="text-xs-right">{{ item.carbs }}</td>
          <td class="text-xs-right">{{ item.protein }}</td>
          <td class="text-xs-right">{{ item.iron }}</td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text class="red--text">qq {{ props }}</v-card-text>
        </v-card>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      items: [
        {
          value: false,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          value: false,
          name: "Eclair",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          value: false,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          value: false,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        }
      ]
    };
  },
  computed: {
    indexedItems() {
      return this.items.map((item, index) => ({
        id: index,
        ...item
      }));
    }
  }
};
</script>
