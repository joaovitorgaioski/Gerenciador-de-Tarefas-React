function Title(props) {
  return (
    <h1
      className="text-3xl text-slate-100 flex text-center font-bold justify-center"
      {...props}
    >
      {props.children}
    </h1>
  );
}

export default Title;
