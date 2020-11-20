<template>
  <q-page padding>
    <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <q-btn color="positive" :disable="loading" label="Añadir doctor" @click="$router.push({name:'add-users'})" />
        <q-btn class="q-ml-sm" color="warning" :disable="loading" label="Actualizar doctor" @click="removeRow" />
        <q-btn class="q-ml-sm" color="negative" :disable="loading" label="Eliminar doctor" @click="removeRow" />
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Nombres',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Apellidos', field: 'calories', sortable: true },
        { name: 'fat', label: 'Nro. Documento', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Especialidad', field: 'carbs' },
        { name: 'protein', label: 'Sexo', field: 'protein' },
      ],
      data: [
        {
          id: 1,
          name: 'Joel',
          calories: 'Medina',
          fat: 44380127,
          carbs: 'Neurologia',
          protein: 'Masculino'
        },
        {
          id: 2,
          name: 'Joel',
          calories: 'Medina',
          fat: 44380127,
          carbs: 'Neurologia',
          protein: 'Masculino'
        },
        {
          id: 3,
          name: 'Joel',
          calories: 'Medina',
          fat: 44380127,
          carbs: 'Neurologia',
          protein: 'Masculino'
        },
        {
          id: 4,
          name: 'Joel',
          calories: 'Medina',
          fat: 44380127,
          carbs: 'Neurologia',
          protein: 'Masculino'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [ ...this.data.slice(0, index), addRow, ...this.data.slice(index) ]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [ ...this.data.slice(0, index), ...this.data.slice(index + 1) ]
        this.loading = false
      }, 500)
    }
  }
}
</script>
