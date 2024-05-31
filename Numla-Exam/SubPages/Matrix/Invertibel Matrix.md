
# Defination
![[Defination af Invertibel Matrix]]


# Tilfælde hvor man ved der eksistere en invers
![[Tilfælde hvor man ved der eksistere en invertibel matrix]]
# Karakteristika For Invertibel Matrix
![[Karakteristika for invertibel matrix]]

# Udregning af Invers matrix
## Ved brug af udviddet matrix
*Note:* Brugt i TØ 5.5 

1. Opsæt den udviddet matrice:
$$
[A|I_n]
$$
2. Udfør rækkeoperationer og forsøg at gå mod:
$$
[I_n|A^{-1}]
$$
*Note* når man har identites matricen til venstre, har man den inverse matrice til højre.

## Ved brug af singulærværdikomponering
[[Sætning 10.2.png]]
[[Singulærværdi komponering]]
1. Lav singulær værdikomponering af A
$$
A=U\Sigma V^T
$$
2. Invers A:
$$
A^{-1}=(U\Sigma V^T)^{-1}
$$
Udfra [[proposition 7.6.png]] får vi:
$$
A^{-1}=V\Sigma^{-1}U^T
$$
3. Den $\Sigma^{-1}$ bliver:
$$
1/\delta_i
$$
*Note:* Bemærk at dette derfor ikke e rmuligt hvis nogle af singulærværdierne er 0.
for hver indgang i diogonalen for $\Sigma$


