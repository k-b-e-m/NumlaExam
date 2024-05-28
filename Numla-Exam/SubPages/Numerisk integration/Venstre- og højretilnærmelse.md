
Fra side 176 har vi
$$
hf(x_j)
$$
som kan udregne arealet på en rektangel R. Desuden fås der at:
$$
h = x_{j+1}-x_j
$$
Derved kan integralet udregnes som summen af alle rektangler.
Eftersom alle rektangler er lige store kan h udregnes som:
$$
h = \frac{1}{n-1}(b-a)
$$
fra side 177

![[Figure 13.4.png]]

Dette kan udregnes med python ved:
``` python
import numpy as np
n = 100
x, h = np.limspace(0,2,n,retstep=True)

# Venstretilnærmelse
h*np.sum((x**3)[:,-1])

#Højre tilnærmelse
h*np.sum((x**3)[1:])
```
