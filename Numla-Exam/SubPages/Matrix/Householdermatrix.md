# Defination
![[Defination 9.14.png]]
[[Kvadratiskmatrix]] [[Ortogonal]]
![[Lemma 9.15.png]]

# Resultater
![[Proposition 9.16.png]]
*Note:* Dette medføre at Householder matricen er en [[Ortogonal Matrix]] udfra [[Definition 9.1.png]].

![[Proposition 9.17.png]]
[[Enhedsvektor]]
# House Houlder matrix udfra s og v på en vektor w
``` Python
import numpy as np
def house_transformation(s, v, w):
	return w - s * v @ (v.T @ w)
```
#BeregnFlops 