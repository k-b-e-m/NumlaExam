![[Inverspotensmetoden algoritme.png]]

*Note:* Denne konvegere mod den [[Egenværdi]] der er tættest på $\mu$ og w konvegere mod den tilhørende [[Egenvektor]].

``` Python
import numpy as np
a = np.array([[2., 8., 1.], [1., 3., 1.], [1., 1., 4.]])

def back_subs(r, c):
    _, n = r.shape 
    x = np.empty((n, 1)) 
    for i in reversed(range(n)):
        x[i] = (c[i] - r[[i], i+1:] @ x[i+1:]) / r[i, i] 
    return x 

def house(x):
    u = x / np.linalg.norm(x) 
    eps = +1 if u[0, 0] >= 0 else -1 
    s = 1 + np.abs(u[0, 0]) 
    v = (eps / s) * u 
    v[0, 0] = 1 
    return v, s


def householder_qr_data(a):
    data = np.copy(a) 
    _, k = a.shape 
    s = np.empty(k)
    for j in range(k):
        v, s[j] = house(data[j:, [j]]) 
        data[j:, j:] -= (s[j] * v) @ (v.T @ data[j:, j:]) 
        data[j+1:, [j]] = v[1:] 
    return data, s


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


def inv_potens_skridt(q, r, w, mu):
    v = back_subs(r, q.T @ w)
    v /= np.linalg.norm(v) 
    lambda_ny = np.vdot(v, a @ v) 
    return lambda_ny, v 

mu = 1.0 
rng = np.random.default_rng() 
m, _ = a.shape 
b = a - mu * np.eye(m) 
q, r = householder_qr(b) 
w = rng.standard_normal((m, 1)) 
w /= np.linalg.norm(w)

n = 20
lambda_out = np.empty(n) 
for i in range(n):
    lambda_out[i], w = inv_potens_skridt(q, r, w, mu)
    #print(lambda_out)

fig, ax = plt.subplots() 
ax.plot(lambda_out, '-o') 
ax.set_xlabel('k') 
ax.set_ylabel('lambda_out[k]')
print("Estimated value: ",lambda_out[-1])
plt.grid()
```

![[Proposition 24.9.png]]

