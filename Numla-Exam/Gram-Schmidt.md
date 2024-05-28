
# Forbedret
![[Forbedret Gram-Schmidt algortime.png]]

## python kode
## Flops for algoritme
*Note:* Udregning af flops kan ses i kapitel 15.4 side 203

Det hele ender med at koste:
$$
2n(k-1)k+k(3n+1) = 2nk^2 + kn +k \approx 2nk^2
$$


# Klassisk
![[Klassisk Gram-schmidt algorithme.png]]

Dette bruges som et led i [[QR-dekomponering]]. 
## python kode
#BeregnFlops
``` Python
import matplotlib.pyplot as plt
import numpy as np

def klassisk_gram_schidt(a):
	_,k = a.shape
	q = np.empty_like(a)
	r = np.zeros((k,k))
	for j in range(k):
		r[:j,[j]] = q[:,:j]].T @ a[:,[j]]
		w = a[:,[j]] - q[:,:j] @ r[:j,[j]]
		r[j,j] = np.linalg.norm(w)
		q[:,[j]] = w / r[j,j]
	return q, r
```
