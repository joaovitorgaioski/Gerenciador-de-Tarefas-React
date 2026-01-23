function Button(props) {
  return (
    <button className="bg-slate-400 text-white p-2 rounded-md" {...props}>
      {props.children}
    </button>
  );
}

export default Button;

// Aqui também estamos economizando código pois os botões definidos com Button terão esse mesmo estilo
