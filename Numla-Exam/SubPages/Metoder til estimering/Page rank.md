Dette er et eksempel på en brug af  [[potensmetoden]] og anvendes af google til at rangere hjemmesider.

![[Page rank side 324.png]]

Dette giver os en [[Stokastisk matrix]].
![[Bemærkning 24.6.png]]

Dette kan laves med pythonkode:
``` Python
import numpy as np

m = #stokastisk matrix

p = 0.85

n,_ = m.shape

a = p*m + ((1-p)/n)*np.ones_like(m)

rng = np.random.default_rng()


n = 5 

v = rng.random((n, 1))

print('v positiv:', np.all(v >= 0))


v /= np.linalg.norm(v)

accuracy = 1e-9

while True:
    v_ny = a @ v
    v_ny /= np.linalg.norm(v_ny)
    if np.vdot(v_ny, v) > 1.0 - accuracy:
        rang_v = v_ny
        break
    else:
        v = v_ny

print('rang_v:')
print(rang_v)
print('lambda =', np.vdot(rang_v, a @ rang_v)) 
print('webside med største page rank:', rang_v.argmax())

print('Rangering af websider (højest først)') 
print(np.flip(np.argsort(rang_v, axis=0)))
```