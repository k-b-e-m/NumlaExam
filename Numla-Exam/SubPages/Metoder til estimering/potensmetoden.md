# For Egenværdi
[[Egenværdi]][[Egenvektor]]
![[Potensmetoden algoritme.png]]

*Note:*  Under visse tilfælde konvegere w mod en egenvektor og $\lambda$ mod dens egenværdi.

``` Python
import numpy as np
import matplotlib.pyplot as plt

a= np.eye(20)

rng = np.random.default_rng()
m, _ = a.shape
w = rng.standard_normal((m, 1))
def potens_skridt(a, w):
    v = a @ w 
    v /= np.linalg.norm(v) 
    lambda_ny = np.vdot(v, a @ v) 
    return lambda_ny, v

n = 20
lambda_out = np.zeros(n) 
for k in range(n): 
    lambda_out[k], w = potens_skridt(a, w) 
    #print(lambda_out)

fig, ax = plt.subplots() 
ax.plot(lambda_out, '-o') 
ax.set_xlabel('k') 
ax.set_ylabel('lambda_out[k]')
print("Estimated value: ",lambda_out[-1])
plt.grid()

print("Estimeret egenvektor: \n",w)

print('Relativ fejl:') 
print(np.linalg.norm(a @ w - lambda_out[-1] * w) / np.linalg.norm(w)
```

# For Singulærværdi
[[Singulærværdi komponering]]
![[potensmetode algoritme singulærværdi.png]]

``` Python
a = np.array([[6,0,0],
              [0,1,0],
              [0,0,2]])

rng = np.random.default_rng() 

def sing_skridt_del(a, v):
    w = a @ v 
    sigma = np.linalg.norm(w) 
    u = w / sigma 
    return sigma, u

m, n = a.shape 
v = rng.standard_normal((n, 1))
v /= np.linalg.norm(v)
len = 20 
sigma_out = np.zeros(2*len) 
for k in range(len): 
    sigma_out[2*k], u = sing_skridt_del(a, v)
    sigma_out[2*k+1], v = sing_skridt_del(a.T, u) 

print(sigma_out)

uu, ssigma, vvt = np.linalg.svd(a, full_matrices=False)
print(f'sigma_0 = {ssigma[0]}') 
print('Relativ fejl:', np.abs(sigma_out[-1] - ssigma[0])/ssigma[0])

fig,ax = plt.subplots()
ax.plot(np.linspace(0,2*len,2*len),sigma_out,"o-")
plt.grid()
```