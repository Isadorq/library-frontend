<template>
  <div>
    <nav>
      <!-- Navbar existente -->
    </nav>

    <main>
      <section class="box">
        <h1>{{ title }}</h1>
      </section>

      <!-- Gráfico do Chart.js -->
      <section class="chart-container">
        <canvas ref="chartCanvas"></canvas>
      </section>

      <div class="main-container">
        <!-- Restante do conteúdo existente -->
      </div>
    </main>

    <footer>
      <!-- Conteúdo do rodapé -->
    </footer>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { Chart } from 'chart.js/auto';

export default defineComponent({
  data() {
    return {
      searchQuery: "",
      title: "Título",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ipsum sem, luctus bibendum risus egestas in.`,
      genre: "",
      author: "",
      year: "",
      code: "",
      status: "",
      quantity: "",
    };
  },
  setup() {
    const chartCanvas = ref(null);

    // Setup do gráfico
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          fill: false,
        },
      ],
    };

    // Configuração do gráfico
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          title: {
            display: true,
            text: 'Relatório Mensal',
          },
        },
      },
    };

    // Inicializa o gráfico após o componente ser montado
    onMounted(() => {
      new Chart(chartCanvas.value, config);
    });

    return { chartCanvas };
  },
});
</script>

<style scoped>
/* Estilo para o container do gráfico */
.chart-container {
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

canvas {
  max-width: 100%;
}
</style>
