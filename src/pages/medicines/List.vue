<template>
  <q-page padding>
    <div class="q-pa-md">
    
    <q-table
      title="Medicinas"
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
        
        <q-btn color="positive" :disable="loading" label="Añadir Medicina" @click="$router.push({name:'add-medicines'})" />
        <q-btn class="q-ml-sm" color="warning" :disable="loading" label="Actualizar Medicina" @click="removeRow" />
        <q-btn class="q-ml-sm" color="negative" :disable="loading" label="Eliminar Medicina" @click="removeRow" />
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
  // name: 'PageName',
}
</script>
