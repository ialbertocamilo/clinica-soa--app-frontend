<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md" >

      <q-card-section class="content">
        <div class="row row-md q-ma-lg ">
          <q-btn label="Agregar paciente"  align="left" color="positive" @click="$router.push({name:'add-patient'})"></q-btn>
        </div>

        <div class=row>


          <div class="col  q-ma-lg " v-for="(patient,index) in patientList" :key="index">
            <q-card bordered class="q-gutter-md q-pa-md full-width" >
              {{patient.name}}
              <q-btn align="center" color="red" dense label="">
                <i class="fas fa-trash"></i> Borrar
              </q-btn>
              <q-btn align="center" color="warning" dense label="ver">
                <i class="fas fa-eye"></i>
              </q-btn>
            </q-card>
          </div>
        </div>
        <div class="flex-break"></div>

      </q-card-section>
    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'


const patientList=[{
  name:'camilo',
  weight:'45kg'
},{
  name:'luis',
  weight: '66kg'
}]
export default defineComponent({
  name: 'PatientList',

  setup()
  {

    return {
      patientList
    }
  }
})
</script>
