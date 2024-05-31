![[Tabel 5.1.png]]

*Note:* +,-, * , /  koster alle et flop, side 57.

![[tabel 17.1.png]]
[[Mindste kvadraters metode via QR-dekomponering]][[Mindste kvadraters metode via SVD]][[Mindste kvadraters metode via normalligninger]]

# Udregning af flops

*Note:* Fra 5.4 har vi udregning:
``` Python
def back_subs(r, c):
    n, _ = r.shape
    x = np.empty((n, 1))
    for i in reversed(range(n)):
        x[i] = (c[i] - r[[i], i+1:] @ x[i+1:]) / r[i, i]
        #       1 flop                  n-i        1 flop
    return x
```
#BeregnFlops