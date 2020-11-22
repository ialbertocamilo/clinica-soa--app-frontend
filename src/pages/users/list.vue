<template>
  <q-page padding>
    <div class="q-pa-md">
    
    <q-table
      title="Doctor"
      :data="data"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      :filter="filter"
      :loading="loading"
      hide-bottom
    >

      <template v-slot:top>
        
        <q-btn color="positive" :disable="loading" label="Añadir doctor" @click="$router.push({name:'add-users'})" />
        <q-btn class="q-ml-sm" color="warning" :disable="loading" label="Actualizar doctor" @click="removeRow" />
        <q-btn class="q-ml-sm" color="negative" :disable="loading" label="Eliminar doctor" @click="removeRow" />
        <q-space />
        <q-input rounded outlined  dense debounce="300" color="primary" v-model="filter">
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
      selected: [],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nombres',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'lastname', align: 'center', label: 'Apellidos', field: 'lastname', sortable: true },
        { name: 'nro_doc', label: 'Nro. Documento', field: 'nro_doc', sortable: true },
        { name: 'speciality', label: 'Especialidad', field: 'speciality' },
        { name: 'gender', label: 'Sexo', field: 'gender' },
      ],
      data: [
        {
          id: 1,
          name: 'Joel',
          lastname: 'Medina',
          nro_doc: 44380127,
          speciality: 'Neurologia',
          gender: 'Masculino'
        },
        {
          id: 2,
          name: 'Joel',
          lastname: 'Medina',
          nro_doc: 44380127,
          speciality: 'Dermatologia',
          gender: 'Masculino'
        },
        {
          id: 3,
          name: 'Joel',
          lastname: 'Medina',
          nro_doc: 44380127,
          speciality: 'Neurologia',
          gender: 'Masculino'
        },
        {
          id: 4,
          name: 'Joel',
          lastname: 'Medina',
          nro_doc: 44380127,
          speciality: 'Neurologia',
          gender: 'Masculino'
        }
      ]
    }
  },

  methods: {
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
