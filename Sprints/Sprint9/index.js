import GetCategoria from "./scenarios/categoria.js";
import {group, check, fail, sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
   return {
     "summary.html": htmlReport(data),
   };
 }
  
 export let options = {
  stages: [
    { duration: "15s", target: 100 },
    { duration: "15s", target: 100 }, 
    { duration: "15s", target: 100 }, 
    
  ],
};

export default () => {
    group('Categoria', () => {
        GetCategoria();
    });

    sleep(1);
}  

