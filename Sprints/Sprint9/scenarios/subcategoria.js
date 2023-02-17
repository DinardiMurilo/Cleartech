import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";


export let GetSubcategoriaDuration = new Trend('get_subcategoria_duration');
export let GetSubcategoriaFailRate = new Rate('get_subcategoria_fail_rate');
export let GetSubcategoriaSuccessRate = new Rate('get_subcategoria_success_rate');
export let GetSubcategoriaReqs = new Rate('get_subcategoria_reqs');

export default function() {
    let res = http.get("https://localhost:5001/subcategoria", {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiI5OTk5OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZGF0ZW9mYmlydGgiOiIwMS8wMS8wMDAxIDAwOjAwOjAwIiwiZXhwIjoxNjc2NjM3NjgzfQ.CcNK3kgd1XXGSzg0CtOEiBxN-j39fZQQXuwBvqldnXs',
      },
    });
    
      check(res, {
        "status was 200": (r) => r.status === 200,
        
      });
    
      sleep(1);
    }