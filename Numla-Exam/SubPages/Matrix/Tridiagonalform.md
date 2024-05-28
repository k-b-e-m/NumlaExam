![[Tridiagonalform side 340.png]]

For en tridiagonalform gælder det at $t_{ij} = 0$ for alle  $|i-j|>1$.

# Reduktion fra Hessenbergform til Tridiagonal
[[HessenbergForm]]
``` Python
import numpy as np

def house_plus(x):
    norm_x = np.linalg.norm(x)
    if norm_x == 0:
        v = np.zeros_like(x)
        v[0, 0] = 1
        s = 0
        eps = 1
    else:
        u = x / norm_x
        eps = 1 if u[0, 0] >= 0 else -1
        s = 1 + np.abs(u[0, 0])
        v = (eps / s) * u
        v[0, 0] = 1
    
    return v, s, eps, norm_x

def tridiagonal_data(a):
    data = np.copy(a)
    if not np.allclose(a, a.T):
        raise np.linalg.LinAlgError('In tridiagonal_data() input must be a symmetric matrix')
    
    n, _ = a.shape
    s = np.empty(n - 2)
    
    for j in range(n - 2):
        v, s[j], eps, norm = house_plus(data[j+1:, [j]])
        u = s[j] * (data[j+1:, j+1:] @ v)
        w = u - ((s[j] / 2) * (u.T @ v)) * v
        v_wT = v @ w.T
        
        data[j+1, j] = -eps * norm
        data[j, j+1] = data[j+1, j]
        data[j+1:, j+1:] -= v_wT + v_wT.T
        data[j+2:, [j]] = v[1:]
    
    return data, s

def tridiagonal_qt(a):
    data, s = tridiagonal_data(a)
    n, _ = a.shape
    t = np.tril(np.triu(data, -1), 1)
    q = np.eye(n)
    
    for j in reversed(range(n - 2)):
        x = data[j+2:, [j]]
        v = np.vstack([[1], x])
        q[j+1:, j+1:] -= (s[j] * v) @ (v.T @ q[j+1:, j+1:])
    
    return q, t
```