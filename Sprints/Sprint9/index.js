import GetCategoria from "./scenarios/categoria.js";
import GetSubcategoria from "./scenarios/subcategoria.js";
import GetProduto from "./scenarios/produto.js";
import { group, check, fail, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export const options = {
  stages: [
    { duration: "5s", target: 500 },
    { duration: "5s", target: 500 },
    { duration: "5s", target: 500 },
    { duration: "5s", target: 500 },
  ],
};

export default () => {
  group('Categoria', () => {
    GetCategoria();
  });
  group('Subcategoria', () => {
    GetSubcategoria();
  });
  group('Produto', () => {
    GetProduto();
  });


  sleep(1);
}

