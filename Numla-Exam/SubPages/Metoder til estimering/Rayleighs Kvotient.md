![[Rayleighs Kvotient defination side 329.png]]
[[potensmetoden]] [[Egenværdi]] [[Egenvektor]]

# RayleigsKvotientMetoden
![[RayleighsKvotientmetoden algoritme.png]]
![[Proposition 24.12.png]]
*Note:* Hvis man ønsker at estimere en bestemt egenværdi kan man bruge [[Note til reyleigh side 338.png]].

``` Python
def back_subs(r, c):
    _, n = r.shape 
    x = np.empty((n, 1)) 
    for i in reversed(range(n)):
        x[i] = (c[i] - r[[i], i+1:] @ x[i+1:]) / r[i, i] 
    return x 

def householder_qr(a):
    data, s = householder_qr_data(a)
    n, k = a.shape 
    r = np.triu(data[:k, :k]) 
    q = np.eye(n, k) 
    for j in reversed(range(k)):
        x = data[j+1:, [j]] 
        v = np.vstack([[1], x])
        q[j:, j:] -= (s[j] * v) @ (v.T @ q[j:, j:]) 
    return q, r

def rayleigh_skridt(a, lambda_est, w):
    m, _ = a.shape
    b = a - lambda_est * np.eye(m) 
    q, r = householder_qr(b) 
    v = back_subs(r, q.T @ w) 
    v /= np.linalg.norm(v) 
    lambda_ny = np.vdot(v, a @ v) 
    return lambda_ny, v 
    
print(a) 
m, _ = a.shape
forsøg = 20
for j in range(forsøg):
    w = rng.standard_normal((m, 1)) 
    w /= np.linalg.norm(w) 
    lambda_est = np.vdot(w, a @ w) 
    
    for i in range(20):
        lambda_est, w = rayleigh_skridt(a, lambda_est, w) 
        if np.allclose(a @ w, lambda_est * w, atol = np.finfo(float).eps): 
            break 

    print(f'Egenværdi estimat {lambda_est:<17.16}', f'efter {i+1} skridt')
```
