![[HessenbergForm og schurform side 339.png]]

*Note:* Hessenbergform er lidt svagere end [[Øvre triangulær matrix]].

For at noget er i hessenbergform gælder det at $h_{ij}=0$ for alle element under underagonalen, dvs for alle $i>j+1$. Ifølge side 339.

Dete kan reduceres til Schurform.

# Reducer til Hessenbergform
![[Hessenberg algortime.png]]

``` Python
def house(x):
    v = x.copy()
    v[0] += np.copysign(np.linalg.norm(x), x[0])
    v /= np.linalg.norm(v)
    beta = 2 / (v.T @ v)
    return v, beta

def hessenberg_data(a):
    data = np.copy(a)
    n, _ = a.shape
    s = np.empty(n-2)
    for j in range(n-2):
        v, s[j] = house(data[j+1:, [j]])
        data[j+1:, j:] -= (s[j] * v) @ (v.T @ data[j+1:, j:])
        data[:, j+1:] -= (s[j] * (data[:, j+1:] @ v)) @ v.T
    return data, s

def hessenberg(a):
    data, _ = hessenberg_data(a)
    return np.triu(data, -1)

def hessenberg_qh(a):
    data, s = hessenberg_data(a)
    n, _ = a.shape
    h = np.triu(data, -1)
    q = np.eye(n)
    for j in reversed(range(n-2)):
        x = data[j+2:, [j]]
        v = np.vstack([[1], x])
        q[j+1:, j+1:] -= (s[j] * (q[j+1:, j+1:] @ v)) @ v.T
    return q, h
```

*Note:* Dette kan yderligere reduceres  til [[Tridiagonalform]]