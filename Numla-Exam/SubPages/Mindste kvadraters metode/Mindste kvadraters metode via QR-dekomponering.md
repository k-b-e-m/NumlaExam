[[QR-dekomponering]]
Python kode:
``` Python
import numpy as np
A = np.array([[0,0,1],
             [1.9**2,1.9,1],
             [3.1**2,3.1,1],
             [6.2**2,6.2,1],
             [7.1**2,7.1,1]])

x = np.array(["a","b","c"])[:,np.newaxis]

b = np.array([4.1,3.1,2.9,4.2,4.8])[:,np.newaxis]

def forbedret_gram_schmidt(a):
    _, k = a.shape 
    q = np.copy(a)
    r = np.zeros((k, k)) 
    for i in range(k): 
        r[i, i] = np.linalg.norm(q[:, i]) 
        q[:, i] /= r[i, i] 
        r[[i], i+1:] = q[:, [i]].T @ q[:, i+1:] 
        q[:, i+1:] -= q[:, [i]] @ r[[i], i+1:] 
    return q, r

q,r = forbedret_gram_schmidt(A)
qTb = (q.T)@b

def back_subs(r, c):
    _, n = r.shape 
    x = np.empty((n, 1)) 
    for i in reversed(range(n)):
        x[i] = (c[i] - r[[i], i+1:] @ x[i+1:]) / r[i, i] 
    return x 
koeffs = back_subs(r, qTb) 
#print(koeffs)
```