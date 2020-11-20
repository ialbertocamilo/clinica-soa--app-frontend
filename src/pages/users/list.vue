<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md" >

      <q-card-section class="content">
        <div class="row row-md q-ma-lg ">
          <q-btn label="Agregar doctor"  align="left" color="positive" @click="$router.push({name:'add-users'})"></q-btn>
        </div>

        <div class=row>


        </div>
        <div class="flex-break"></div>

      </q-card-section>
    </div>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
