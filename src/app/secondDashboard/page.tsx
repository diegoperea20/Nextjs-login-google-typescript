

function SecondDashboard() {
  // Función para generar un número aleatorio
  const generarNumeroAleatorio = (): number => {
    return Math.floor(Math.random() * 100000);
  }

  // Genera un array con 6 números aleatorios
  const numerosAleatorios = Array.from({ length: 6 }, generarNumeroAleatorio);

  return (
    <div className='flex flex-wrap gap-4 justify-center p-5'>
      {numerosAleatorios.map((numero, index) => (
        <div key={index} className='card'>
          {numero}
        </div>
      ))}
    </div>
  );
}

export default SecondDashboard;
