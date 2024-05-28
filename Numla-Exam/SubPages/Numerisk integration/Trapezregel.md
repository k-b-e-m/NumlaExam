Som alternativ til [[Venstre- og højretilnærmelse]], kan man benytte sig af trapez-tilnærmelse.

For dette kan man benytte:
$$
h\frac{1}{2}(f(x_j)+f(x_{j+1}))
$$
Man kan således tage summen af dette.
![[13.5.png]]

I python kan dette udregnes:
``` Python
def trapz(f,h):
	return h*(f[0]+2*np.sum(f[1:-1])) + f[-1]/2
```

*Note:* For funktioner der kan differeniters 2 gange beregner trapez med en fejl:
$$
\frac{1}{12}h^2(b-a)max\{|f''(x)||a\leq x \leq b\}
$$
