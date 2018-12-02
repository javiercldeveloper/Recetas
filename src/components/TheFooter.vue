<template>
    <div class="footer">
        <div>
             <a href="#"><p>Aviso Legal</p></a>
        </div>
        <div>
            <a href="https://kaypacome.tk/"><p>KayPaCome.tk</p></a>
        </div>
        <div>
            <p>CopyRight {{ year }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheFooter',
  created () {
    this.getCurrentYear()
  },
  data () {
    return {
      year: null
    }
  },
  methods: {
    getCurrentYear () {
      let currenTime = new Date()
      this.year = currenTime.getFullYear()
    }
  }
}

</script>

<style lang="scss">
@import "../styles/global.scss";
  .footer {
  text-align: center;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  background-color: $color-secondary;
  min-height: 50px;
  a {
    color:white
  }
  }
</style>
