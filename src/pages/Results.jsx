const Results = () => {
  const endPoint = 12;
  const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const calResult = () => {
    let result = select.indexOf(Math.max(...select));
    return result;
  };
    
    const setResult = () => {
        let point = calResult();
        const resultName = 
    }
  return <div>Results</div>;
};

export default Results;
