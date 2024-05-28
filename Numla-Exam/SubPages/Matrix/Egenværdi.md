# Definition
![[Definition 21.1.png]]
Se også [[Egenvektor]].

*Note:* I kraft af 21.1 kan dette omskrives til:
$$
(A-\lambda I_n)v = 0
$$
Fra side 268.

![[Proposition 21.2.png]]
[[Determinant]] [[Invertibel Matrix]]
I kraft af [[sætning 21.14.png]] har vi derved at for en  kvadratisk matrix at det også gælder for dem.
![[Proposition 23.2.png]]
[[Egenvektor]]
# Resultater
![[Proposition 21.16.png]]
[[Lineært uafhængig]][[Egenvektor]]
![[Proposition 23.4.png]]
![[Sætning 23.10.png]]
[[Diagonaliserbar matrix]]
# Metoder til beregning
## Egenværdi udfra egenvektor
Har man en [[Egenvektor]] kan man finde en egenværdi ved brug af [[Definition 21.1.png]].
Eksempel:
$$
A =
\begin{bmatrix}
3 & 1\\
2& 2
\end{bmatrix}
,
v_0 = 
\begin{bmatrix}
1\\
-2
\end{bmatrix}
$$
$$
\begin{bmatrix}
3 & 1\\
2& 2
\end{bmatrix}
\begin{bmatrix}
1\\
-2
\end{bmatrix}
=
\begin{bmatrix}
1\\
-2
\end{bmatrix}
=\lambda_0\begin{bmatrix}
1\\
-2
\end{bmatrix}
$$
Vi kan udfra dette se at egenværdien skal være 1.


## Egenværdi udfra karakteristisk polynomie
*Note:* Brugt i TØ 12.1
1. Find det karakteristiske polynomie ved $det(A-\lambda I_n)$ [[Determinant]]
2. Det karakteristiske polynomies rødder er egenværdierne. Dette er i kraft af [[Proposition 21.2.png]],[[sætning 21.14.png]] og [[proposition 21.15.png]]. 
## Inverspotensmetode
![[Inverspotensmetode]]
## Potensmetoden
![[potensmetoden]]
## Rayleighs kvotient
![[Rayleighs Kvotient]]