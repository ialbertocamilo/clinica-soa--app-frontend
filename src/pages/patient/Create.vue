<template>
  <q-page padding>
    <div class="q-pa-md   q-gutter-md content-center items-center justify-center flex-center">
      <q-card bordered style="width: 450px">
        <q-card-section>
          <h5 class="text-blue-8 text-center">Agregar paciente</h5>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <div class="text-center">

            <img alt="paciente" src="https://cdn.pixabay.com/photo/2016/12/01/09/06/patient-care-1874746_960_720.jpg"
                 style="width: 300px">

          </div>
          <q-input label="Email"></q-input>
          <q-input label="Password" type="password"></q-input>
          <q-input label="Nro. Documento"></q-input>
          <q-input label="Nombre"></q-input>
          <q-input label="Apellidos"></q-input>
          <q-input label="Telefono"></q-input>
          <q-input label="Direccion"></q-input>
          <q-input label="Peso"></q-input>
          <q-input label="Fecha de cumplea;os"></q-input>


        </q-card-section>

        <q-card-section class="flex-center text-center">
          <q-btn color="primary" label="Guardar"></q-btn>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PatientCreate',
  meta: {
    title: 'gaaa'
  }
});
</script>
