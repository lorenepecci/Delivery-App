const dataAtualFormatada = (dateString) => {
  const data = new Date(dateString);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear(); return `${dia}/${mes}/${ano}`;
};

export default dataAtualFormatada;
