En Bidiogonal matrix er ligesom en [[DiagonalMatrix]], dog hvor der er 2 diogonaler der indeholder en værdi.
Fra side 349 har vi:
![[Bidiogonal Matrix side 349.png]]

Omdannelse fra matrix til Bidiagonal

![[Bidiogonal Matrix algoritme.png]]

I python har man:
``` Python
import numpy as np

def house(x):
	norm_x = np.linalg.norm(x)
	if norm_x == 0:
	 v = np.zeros_like(x)
	 v[0, 0] = 1 
	 s = 0 
    else: 
    u = x / norm_x 
    eps = +1 if u[0, 0] >= 0 else -1 
    s = 1 + np.abs(u[0, 0]) 
    v = (eps / s) * u 
    v[0, 0] = 1 
return v, s

def bidiagonal_data(a):
	data = np.copy(a) 
	m, n = a.shape 
	kv = n if m > n else m-1 
	kh = m if m < n-1 else n-2 
	sv = np.zeros(kv) 
	sh = np.zeros(kh) 
	for k in range(np.max([kv, kh])):
	 if k < kv:
		 v, sv[k] = house(data[k:, [k]]) 
		 data[k:, k:] -= ((sv[k] * v) @ (v.T @  data[k:, k:])) 
		 data[k+1:, [k]] = v[1:]
	 if k < kh:
	  v, sh[k] = house(data[[k], k+1:].T) 
	  data[k:, k+1:] -= (sh[k] * (data[k:, k+1:] @ v)) @ v.T 
	  data[[k], k+2:] = v[1:].T
  return data,sv,sh
def bidiagonal(a):
	data, sv, sh = bidiagonal_data(a)
	return np.tril(np.triu(data),1)


def bidiagonal_qbpt(a):
    data, sv, sh = bidiagonal_data(a)
    m, n = a.shape
    kv = n if m > n else m - 1
    kh = m if m < n - 1 else n - 2
    
    b = np.tril(np.triu(data), 1)
    q = np.eye(m)
    pt = np.eye(n)
    
    for k in reversed(range(np.max([kv, kh]))):
        if k < kh:
            x = data[[k], k + 2:]
            vt = np.hstack([[[1]], x])
            pt[k + 1:, k + 1:] -= (sh[k] * (pt[k + 1:, k + 1:] @ vt.T)) @ vt
        
        if k < kv:
            x = data[k + 1:, [k]]
            v = np.vstack([[1], x])
            q[k:, k:] -= (sv[k] * (q[k:, k:] @ v)) @ v.T

    return b, q, pt

```