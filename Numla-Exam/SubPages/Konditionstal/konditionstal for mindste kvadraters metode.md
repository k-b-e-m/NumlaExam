[[Mindste kvadraters metode]]

For at beregne $cos(\theta)$:
$$
cos(\theta) = \frac{||Pb||_2}{||b||_2}
$$

For at beregne konditionstallet for beregning fra $b$ til $PB$ har man:
$$
\kappa = \frac{1 }{cos(\theta)}
$$

for at beregne $\eta$ :
$$
\eta = ||A||_2 \frac{||x||_2}{||Ax||_2} =\sigma_0 \frac{||x||_2}{||Ax||_2}
$$

for at beregne løsningen x til ax som funktion af b:
$$
\kappa = \frac{\kappa(A)}{\eta \cos(\theta)}
$$
[[konditiontal for invertibel matrix]]

Konditionstal for beregning af Pb som funktion af A opfylder:
$$
\kappa \leq \frac{\kappa(A)}{cos(\theta)}
$$
Dette medfører:
$$
\kappa \leq \kappa(A) + \frac{\kappa(A)^2|tan(\theta)|}{\eta}
$$
