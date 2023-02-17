import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";


export let GetProdutoDuration = new Trend('get_produto_duration');
export let GetProdutoFailRate = new Rate('get_produto_fail_rate');
export let GetProdutoSuccessRate = new Rate('get_produto_success_rate');
export let GetProdutoReqs = new Rate('get_produto_reqs');

export default function() {
    let res = http.get("https://localhost:5001/produto", {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiI5OTk5OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZGF0ZW9mYmlydGgiOiIwMS8wMS8wMDAxIDAwOjAwOjAwIiwiZXhwIjoxNjc2NjM3NjgzfQ.CcNK3kgd1XXGSzg0CtOEiBxN-j39fZQQXuwBvqldnXs',
      },
    });
    
      check(res, {
        "status was 200": (r) => r.status === 200,
        
      });
    
      sleep(1);
    }