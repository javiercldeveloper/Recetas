<template>
    <div class="mainSlider">
        <div class="subslider">
        <h1>Slider de imagenes</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheSlider'
}
</script>

<style lang="scss" scoped>
    .mainSlider{
        text-align: center;
        display: flex;
        justify-items: center;
    }
    .subslider{
        background-color: royalblue;
        color: white;
        flex: 1;
    }
</style>
