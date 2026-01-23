function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2"
      {...props}
    />
  );
}

export default Input;

// Aqui fazemos economia de código pois o className não precisa ser repetido. Todos os Input terão esse estilo
