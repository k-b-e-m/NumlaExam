# Definition
![[Definition 21.1.png]]
Se også [[Egenvektor]].

*Note:* I kraft af 21.1 kan dette omskrives til:
$$
(A-\lambda I_n)v = 0
$$
Fra side 268.

*Note:* Fra TA 12.5 har vi at T(A) gælder for alle matricer.  T(A) er summen af diogonalen på matricen. Vi har her at $\sum \lambda_i = T(A)$ Desuden har vi at $\prod \lambda_i = det(A)$


![[Proposition 21.2.png]]
[[Determinant]] [[Invertibel Matrix]]
I kraft af [[sætning 21.14.png]] har vi derved at for en  kvadratisk matrix at det også gælder for dem.
*Note:* I kraft af [[Proposition 21.2.png]] medfører dette at hvis en egen værdi er 0 er determinaten for A 0 udfra [[sætning 21.14.png]].

![[Proposition 23.2.png]]
[[Egenvektor]]
# Resultater
![[Proposition 21.16.png]]
[[Lineært uafhængig]][[Egenvektor]]
![[Proposition 23.4.png]]
![[Sætning 23.10.png]]
[[Diagonaliserbar matrix]]

*Note:* Fra TØ 12.5 har vi at summen af diagonalen er lig summen af egenværdierne hvis matrixen er [[Diagonaliserbar matrix]]. Yderligere har vi fra wikipedia at det gælder for alle matricer.
![[proposition 21.15.png]]

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
*Note:* Nogle gange kan det være muligt at faktorisere/simplificere polynomiet, derved kan man nogle gange se polynomiet.
## Egenværdi uden brug af python (Eksempel)
$$
A=
\begin{bmatrix}
2&1&1\\
0&2&2\\
1&1&2
\end{bmatrix}
$$
Vi vil nu regne det karakteristiske polynomie hvor vi regner determinanten som [[Definition 21.12.png]]:
$$
det(
\begin{bmatrix}
2-\lambda&1&1\\
0&2-\lambda&2\\
1&1&2-\lambda
\end{bmatrix})
$$
=
$$
(2-\lambda)*((2-\lambda)*(2-\lambda)-(1*2))-1*(0*(2-\lambda)-(2*1))+1*(0*(1)-(2-\lambda*1))
= - \lambda^3 + 6*\lambda^2 - 9*\lambda + 4 =
$$
$$
-1*(\lambda-4)(\lambda-1)(\lambda-1)
$$
Udfra dette kan vi se at 4 og 1 er egenværdier
## Inverspotensmetode
![[Inverspotensmetode]]
## Potensmetoden
![[potensmetoden]]
## Rayleighs kvotient
![[Rayleighs Kvotient]]